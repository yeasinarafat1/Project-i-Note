import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import gneratecookie from '../utils/gneratecokkie.js'
const login =async (req,res)=>{
    const {email,password}= req.body
    const user = await User.findOne({email})
    if(user){
        let isCorrectPassword = await bcrypt.compare(password,user?.password || "")
        if (isCorrectPassword) {
            const {_id,fullName,email,profile} = user
            gneratecookie(_id,res)
            res.status(200).json({_id,fullName,email,profile})
        } else {
            res.status(400).json({error:"Invalid email or password"})
        }
    }
    else{
        res.status(404).json({error:"Invalid email or password"})
    }
    }
    
export default login;