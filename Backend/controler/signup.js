import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import gneratecookie from "../utils/gneratecokkie.js";
const signup = async (req, res) => {
    try {
        const { fullName, email, password, confirmpassword, gender } = req.body
        

        if (password != confirmpassword) {
            return res.status(400).json({ error: 'Both password and confirm password must be same ' })
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({error:"user already exist"})
        }
        const salt = await bcrypt.genSalt(10)
        const hasspassword = await bcrypt.hash(password,salt)
        
        const api_name = fullName.replaceAll(' ','+')
        const profile = `https://ui-avatars.com/api/?background=random&name=${api_name}`
        
        
        const newUser = new User({fullName,email,password:hasspassword,profile})
        if(newUser){
            gneratecookie(newUser._id,res)
            await newUser.save()
        res.status(200).json({newUser})
        }
        else{
            res.status(400).json({error:"Internal server error"})
        }

    } catch (error) {
        console.log("an error occured",error);
        
    }

    
}
export default signup;