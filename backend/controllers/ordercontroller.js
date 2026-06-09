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
    await userModel.findByIdAndUpdate(userId,{cartitem:{}})
res.json({success:true,message:"Order Placed Successfull using cod"})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
};

const userorder=async(req,res)=>{
  try {
    const userId=req.userid
   const orders=await ordermodel.find({userId})
   res.json({success:true,orders})
  } catch (error) {
    res.json({success:false,message:error.message})
  }

}
const allorders=async(req,res)=>{
try {
  const orders=await ordermodel.find({})
  res.json({success:true,orders,message:"all orders fetched successfully"})
} catch (error) {
  res.json({success:false,message:error.message})
}
}
export { placeordercod ,userorder,allorders};
