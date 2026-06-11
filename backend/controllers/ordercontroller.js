import ordermodel from "../models/ordermodel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import razorpay from "razorpay";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpayinstance = new razorpay({
  key_secret: process.env.RAZORPAY_KEY_SECRET,
  key_id: process.env.RAZORPAY_KEY_ID,
});
const { currency } = "inr";
const placeordercod = async (req, res) => {
  try {
    const userId = req.userid;
    const { items, amount, address } = req.body;
    const orderdata = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const neworder = new ordermodel(orderdata);
    await neworder.save();
    await userModel.findByIdAndUpdate(userId, { cartitem: {} });
    res.json({ success: true, message: "Order Placed Successfull using cod" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const userorder = async (req, res) => {
  try {
    const userId = req.userid;
    const orders = await ordermodel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const allorders = async (req, res) => {
  try {
    const orders = await ordermodel.find({});
    res.json({
      success: true,
      orders,
      message: "all orders fetched successfully",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await ordermodel.findByIdAndUpdate(orderId, { status });
    res.json({
      success: true,
      orders,
      message: " orders status has been updated  successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const placeorderStripe = async (req, res) => {
  try {
    const userId = req.userid;
    const { items, amount, address, delivery_fee } = req.body;

    const { origin } = req.headers;
    const orderdata = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };
    const neworder = new ordermodel(orderdata);
    await neworder.save();

    const currency = "inr";

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    console.log(items);
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: delivery_fee * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${neworder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${neworder._id}`,
      line_items,
      mode: "payment",
    });
    res.json({
      success: true,
      session_url: session.url,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const verifystripe = async (req, res) => {
  const userId = req.userid;
  const { success, orderId } = req.body;
  try {
    if (success === "true") {
      await ordermodel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartitem: {} });
      res.json({ success: true });
    } else {
      await ordermodel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const placeorderRazorpay = async (req, res) => {
  try {
    const userId = req.userid;
    const { items, amount, address } = req.body;

    const currency = "inr";

    const orderdata = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const neworder = new ordermodel(orderdata);
    await neworder.save();

    const options = {
      amount: Number(amount) * 100,
      currency: currency.toUpperCase(),
      receipt: neworder._id.toString(),
    };

    const razorpayOrder = await razorpayinstance.orders.create(options);

    res.json({
      success: true,
      order: razorpayOrder,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};
const verifyRazorpay = async (req, res) => {
  try {
    const userId = req.userid;
    const { razorpay_order_id } = req.body;
    const orderinfo = await razorpayinstance.orders.fetch(razorpay_order_id);
    if (orderinfo.status === "paid") {
      await ordermodel.findByIdAndUpdate(orderinfo.receipt, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartitem: {} });
       res.json({success:true,message:"payment by Razorpay successfull"})
    }
    else{
      res.json({success:false,message:"payment by Razorpay Failed"})
    }
    res.json({success:true,message:"payment by Razorpay successfull"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
};
export {
  placeordercod,
  userorder,
  allorders,
  updateOrderStatus,
  placeorderStripe,
  verifystripe,
  placeorderRazorpay,
  verifyRazorpay,
};
