import express from 'express'
import {loginUser,registerUser,adminLogin} from '../controllers/userController.js'
const userrouter=express.Router();
userrouter.post('/register',registerUser);
userrouter.post('/loginUser',loginUser);
userrouter.post('/adminLogin',adminLogin);
export default userrouter;