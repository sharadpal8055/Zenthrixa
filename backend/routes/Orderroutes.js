import express from "express"
import { placeordercod } from "../controllers/ordercontroller.js"
import userauth from "../middleware/auth.js"
const Orderrouter=express.Router()
Orderrouter.post('/placeorder', userauth, placeordercod)
export default Orderrouter