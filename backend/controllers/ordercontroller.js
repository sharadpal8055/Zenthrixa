import ordermodel from "../models/ordermodel.js";
import userModel from "../models/userModel.js";

const placeordercod = async(req, res) => {
  try {
     const userId=req.userid
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
    const neworder=new ordermodel(orderdata)
    await neworder.save()
    await userModel.findByIdAndUpdate(userid,{cartitem:{}})
res.json({success:true,message:"Order Placed Successfull using cod"})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
};
export { placeordercod };
