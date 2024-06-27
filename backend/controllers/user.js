import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const Register = async (req, res)=>{
    try{
        const {fullName, email, password}= req.body;
        if(!fullName || !email || !password)
            {
                return res.status(401).json(
                    {
                        message :"invalid data",
                        success: false,
                    }
                )
            }


        const user= await User.findOne({email});
        if(user)
            {
                return res.status(401).json({
                    message:"user already exist",
                    success:false,
                })
            }
         const hashedPassword = await bcryptjs.hash(password,16);
        await User.create(
            {
                fullName,
                email,
                password:hashedPassword
            }
        );
        return res.status(201).json({
            message: "account created",
        })
    }
    catch{
        console.log(error);
    }
}