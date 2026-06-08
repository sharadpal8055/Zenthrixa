import express from "express"
import { addtocart, getUserCart, updatetocart } from "../controllers/cartcontroller.js"
import userauth from "../middleware/auth.js"
const cartRouter=express.Router()
cartRouter.post('/addtocart',userauth,addtocart)
cartRouter.post('/updatetocart',userauth,updatetocart)
cartRouter.post('/getUserCart',userauth,getUserCart)
export default cartRouter