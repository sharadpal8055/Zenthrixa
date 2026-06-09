import express from "express"
import { allorders, placeordercod, userorder } from "../controllers/ordercontroller.js"
import userauth from "../middleware/auth.js"
import adminauth from "../middleware/adminauth.js"
const Orderrouter=express.Router()
Orderrouter.post('/placeordercod', userauth, placeordercod)
Orderrouter.post('/userorder', userauth, userorder)
Orderrouter.post('/allorders', adminauth, allorders)
export default Orderrouter