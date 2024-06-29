import user from "../models/user.js";
import bcrypt from 'bcryptjs'
const changePassword = async (req,res)=>{
    const {_id,oldPassword,newPassword} = req.body;
    
    
    try {
        const User = await user.findById(_id)
    const checkPassword = await bcrypt.compare(oldPassword,User?.password || "")
    
    if(!checkPassword){
        res.status(400).json({error:"Old password is not correct"})
    }else{
        const salt = await bcrypt.genSalt(10)
        const hasspassword = await bcrypt.hash(newPassword,salt)
        User.password = hasspassword;
       
        
        User.save()
        delete User.password
        res.status(200).json(User)
    }
    } catch (error) {
      console.log(error)  
    }
}
export default changePassword;