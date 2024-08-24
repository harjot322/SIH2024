import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

const Authentication = async (req, res, next) => {
    try {

        const token = req.cookies?.token || req.header('Authorization').replace('Bearer ', '');

        if (!token) {

            return res.status(401).json({ status: 401, message: "Unauthorized" });

        }

        const verify = jwt.verify(token, process.env.JWT_SECRET);

        if (!verify) {

            return res.status(401).json({ status: 401, message: "Unauthorized" });

        }

        const user = await User.findById(verify.id).select("-password");

        if (!user) {

            return res.status(401).json({ status: 401, message: "Unauthorized" });

        }

        req.user = user;

        next();



        
        
    } catch (error) {
        
        res.status(500).json({status : 500 , message: error.message});
    }
};


export default Authentication;