import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import { json } from "express";
const addproduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestseller,
    } = req.body;
    console.log(req.body)
    console.log(req.files)
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined,
    );
    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
       
      }),
    );
    console.log(imageUrl)
     const productdata = {
          name,
          description,
          price,
          category,
          subcategory,
          bestseller: bestseller == "true" ? true : false,
          sizes: JSON.parse(sizes),
          image: imageUrl,
          date: Date.now(),
        };
     console.log(productdata)
    const product=new productModel(productdata);
    await product.save();
    res.json({success:true,message:"Product Added"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
};


const listproduct = async (req, res) => {
  try {
      const product=await productModel.find({})
 
res.json({success:true,message:"product has been listed",product})
  } catch (error) {
    res.json({success:false,message:error.message})
  }

};



const removeproduct = async (req, res) => {
  try {
    const product=await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"product has been deleted successfully"})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
};


const singleproduct = async (req, res) => {
  try {
 
    const {productId}=req.body
    console.log(productId)
    const product=await productModel.findById(productId)
    res.json({success:true,product})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
};
export { addproduct, listproduct, removeproduct, singleproduct };
