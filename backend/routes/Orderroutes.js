import express from "express"
import { allorders, placeordercod, placeorderRazorpay, placeorderStripe, updateOrderStatus, userorder, verifyRazorpay, verifystripe } from "../controllers/ordercontroller.js"
import userauth from "../middleware/auth.js"
import adminauth from "../middleware/adminauth.js"
const Orderrouter=express.Router()
Orderrouter.post('/placeordercod', userauth, placeordercod)
Orderrouter.post('/placeorderRazorpay', userauth, placeorderRazorpay)
Orderrouter.post('/verifyRazorpay', userauth, verifyRazorpay)
Orderrouter.post('/placeorderStripe', userauth, placeorderStripe)
Orderrouter.post('/verifystripe', userauth, verifystripe)
Orderrouter.post('/userorder', userauth, userorder)
Orderrouter.post('/allorders', adminauth, allorders)
Orderrouter.post('/updateOrderStatus', adminauth, updateOrderStatus)
export default Orderrouter