import { User } from "../models/userModel";

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

        await User.create(
            {
                fullName,
                email,
                password
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