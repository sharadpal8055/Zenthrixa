import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectdb from './config/mongodb.js';
import connectcloudinary from './config/cloudinary.js';

//app config
const app=express()
const port=process.env.PORT||4000;
connectdb();
connectcloudinary();
//middlewares
app.use(express.json())
app.use(cors())

//api endpoints

app.get('/',(req,res)=>{
  res.send("Api is working")
})
app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))