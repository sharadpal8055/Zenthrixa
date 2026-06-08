import userModel from "../models/userModel.js";

const addtocart = async (req, res) => {
  try {
    // const { userid, itemid, size } = req.body;
   const userid=req.userid
    const {  itemid, size } = req.body;

    const userdata = await userModel.findById(userid);

    if (!userdata) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    let cartitem = userdata.cartitem || {};

    if (cartitem[itemid]) {
      if (cartitem[itemid][size]) {
        cartitem[itemid][size] += 1;
      } else {
        cartitem[itemid][size] = 1;
      }
    } else {
      cartitem[itemid] = {};
      cartitem[itemid][size] = 1;
    }

    await userModel.findByIdAndUpdate(userid, { cartitem }, { new: true });

    res.json({
      success: true,
      message: "Item added to cart successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const updatetocart = async (req, res) => {
  try {
   const userid=req.userid
    const {  itemid, size, quantity } = req.body;

    const userdata = await userModel.findById(userid);

    let cartitem = userdata.cartitem;

    cartitem[itemid][size] = quantity;

    await userModel.findByIdAndUpdate(userid, { cartitem });

    res.json({
      success: true,
      message: "Cart updated",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const getUserCart = async (req, res, next) => {
  try {
    // const { userid } = req.body;
    const userid=req.userid
    const userdata = await userModel.findById(userid);
    const cartitem = userdata.cartitem;
    res.json({
      success: true,
      cartitem: userdata.cartitem,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export { addtocart, updatetocart, getUserCart };
