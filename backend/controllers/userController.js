import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createtoken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET
  );
};

const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Enter valid email"
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters"
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedpassword =
      await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedpassword
    });

    const user = await newUser.save();

    const token = createtoken(user._id);

    res.status(201).json({
      success: true,
      token
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const loginUser = async (req, res) => {};
const adminLogin = async (req, res) => {};
export { loginUser, registerUser, adminLogin };
