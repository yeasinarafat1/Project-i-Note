import mongoose from "mongoose";
const userschema =new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true,
    }

})
 const user =  mongoose.model('users',userschema)
 export default user;
