import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectdb from './config/mongodb.js';
import connectcloudinary from './config/cloudinary.js';
import Userrouter from './routes/Userrouter.js'
import productroutes from './routes/Productroutes.js';
import cartRouter from './routes/Cartroutes.js';
import Orderrouter from './routes/Orderroutes.js';
//app config
const app=express()
const port=process.env.PORT||4000;
connectdb();
connectcloudinary();
//middlewares
app.use(express.json())
app.use(cors())
app.use('/api/user',Userrouter)
app.use('/api/product',productroutes)
app.use('/api/cart',cartRouter)
app.use('/api/order',Orderrouter)
//api endpoints

app.get('/',(req,res)=>{
  res.send("Api is working")
})
app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))