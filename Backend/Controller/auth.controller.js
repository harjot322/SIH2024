import cookieParser from 'cookie-parser';
import User from '../Models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign(
        {
            id
        }, 
            process.env.JWT_SECRET, 
        {
            expiresIn: '30d'
        });
}


export const registerRequest = async (req, res) => {

    try {

        const {name, email, password} = req.body;

        if(!name || !email || !password){ 
        
            return res.status(400).json({status : 400 , message: "All fields are required"});
        
        }
        if(!email.includes("@") || !email.includes(".")){
            return res.status(400).json({
                status : 400,
                message : "Invalid Email"
            })
        }

        if(password.length < 6){ 
        
            return res.status(400).json({status : 400 , message: "Password length should be greater than 6"});
        
        }
        const user = await User.findOne({email});


        if(user){
        
            return res.status(400).json({status : 400 , message: "User already exists"});
        
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const userCreated = await User.create({
            name,
            email,
            password: hashedPassword
        });
        if(!userCreated){
        
            return res.status(400).json({status : 400 , message: "User not created"});
        
        }

        res.status(200).json({status : 200 , message: "User registered successfully"});
        
    } catch (error) {
        
        res.status(500).json({status : 500 , message: error.message});

    }

};

export const loginRequest = async (req, res) => {

    try{

        const {email, password} = req.body;

        if(!email || !password){
        
            return res.status(400).json({status : 400 , message: "All fields are required"});
        
        }
        if(!email.includes("@") || !email.includes(".")){
            
            return res.status(400).json({status : 400, message : "Invalid Email"})
        
        }
        const user = await User.findOne({email});

        if(!user){
        
            return res.status(400).json({status : 400 , message: "User not found"});
        
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
        
            return res.status(400).json({status : 400 , message: "Invalid credentials"});
        
        }

        const token = generateToken(user._id);

        await User.findByIdAndUpdate(user._id, {
            token
        });

        const userData = {
            id : user._id,
            name : user.name,
            email : user.email,
            token : token
        }
        res.cookie('token', token, {
            maxAge: 30*24*60*60*100, //30days
            httpOnly: true,
            secure: true,
            sameSite: 'none'
            
            
        });
        return res.status(200).json({status : 200 , message: "User logged in successfully", userData});

        

    }
    catch(error){

        res.status(500).json({status : 500 , message: error.message});

    }


    
};


export const logoutRequest = async (req, res) => {

    try {
        
        res.clearCookie('token');

        return res.status(200).json({status : 200 , message: "User logged out successfully"});


    } catch (error) {
        
    }
};



