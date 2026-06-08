import express from "express"
import { placeordercod, userorder } from "../controllers/ordercontroller.js"
import userauth from "../middleware/auth.js"
const Orderrouter=express.Router()
Orderrouter.post('/placeordercod', userauth, placeordercod)
Orderrouter.post('/userorder', userauth, userorder)
export default Orderrouter