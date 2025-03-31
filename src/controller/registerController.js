import User from '../models/user';
import {config} from 'dotenv';
import jwt from 'jasonwebtoken';
config();
const jwtkey = process.env.JWT_SECRET;
const registerController = async (req, res) => {
    try{
        const {email,password,businessName} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                "message":"Business with this email already exists"
            })
        }
        const newUser = new User({
            email,password,businessName
        })
        await newUser.save();
        const token = jwt.sign(
            {id:newUser._id,email:newUser.email},
            jwtkey,
            {expiresIn:'1h'}
        )
        return res.status(201).json({
            message:"User registered succesfully",
            token
        })
    }catch(err){
        console.error("error in register Contoller",err);
        return res.status(500).json({
            "message": "Internal server error"
        })
    }
};

export default registerController;