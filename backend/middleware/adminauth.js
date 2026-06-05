import jwt from "jsonwebtoken"

const adminauth=async(req,res,next)=>{
  try {
    const{token}=req.headers
    if(!token){
      return res.json({success:false,message:"Not authorized loing again"})
    }
    const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
    if(tokendecode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
      return res.json({success:false,message:"Not authorized loing again"})
    }
    next()
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}
export default adminauth