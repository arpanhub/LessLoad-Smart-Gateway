import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
const jwtKey = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
    const token= req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: "No token provided."
        });
    }
    try{
        const decoded = jwt.verify(token, jwtKey);
        req.body = decoded;
    }catch(err){
        return res.status(401).json({
            message: "Invalid token."
        });
    }
    next();
};
export default authMiddleware;