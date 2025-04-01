import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { config } from 'dotenv';
config();
const jwtKey = process.env.JWT_SECRET;
const loginController =async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password"
            })
        }
        if(password!==user.password){
            return res.status(401).json({
                message:"Invalid email or password"
            })
        }
        const token=jwt.sign(
            {id:user._id,email:user.email},
            jwtKey,
            {expiresIn:'1h'}
        );
        return res.status(200).json({
            message:"Login Successful",
            token
        })
    }catch(err){
        console.error("error in login Contoller",err);
        return res.status(500).json({
            "message": "Internal server error"
        })
    }
}

export default loginController;