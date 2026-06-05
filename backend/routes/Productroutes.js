import adminauth from"../middleware/adminauth.js"

import {
  addproduct,
  listproduct,
  removeproduct,
  singleproduct,
} from "../controllers/productController.js";
import express from "express";
import upload from "../middleware/multer.js";
const productroutes = express.Router();
productroutes.post(
  "/addproduct",adminauth,
  upload.fields([
    {
      name: "image1",
      maxCount: 1,
    },
    {
      name: "image2",
      maxCount: 1,
    },
    {
      name: "image3",
      maxCount: 1,
    },
    {
      name: "image4",
      maxCount: 1,
    },
  ]),
  addproduct,
);
productroutes.post("/removeproduct", adminauth,removeproduct);
productroutes.get("/listproduct", listproduct);
productroutes.post("/singleproduct", singleproduct);
export default productroutes;
