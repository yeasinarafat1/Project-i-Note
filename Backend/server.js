import express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import path from 'path'
import usersignup from './routes/user.signup.js'
import userlogin from './routes/user.login.js'
import userlogout from './routes/user.logout.js'
import NoteRoute from './routes/NoteRoute.js'
import changePasswordRoute from './routes/changePasswordRoute.js'
dotenv.config()
let a = await mongoose.connect(process.env.DB_URI,).then(()=> console.log('connection success ful'))
.catch((err)=> console.log(err))
const app = express()
const PORT = process.env.PORT
const __dirname = path.resolve()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"..","Frontend","dist")))
app.use('/auth/signup',usersignup)
app.use('/auth/login',userlogin)
app.use('/auth/logout',userlogout)
app.use('/auth/changepassword',changePasswordRoute)
app.use('/note',NoteRoute)


app.get('*',(req,res) => { 
    res.sendFile(path.join(__dirname,"..","Frontend","dist","index.html"))
 })
app.listen(PORT,()=>{
    console.log('server running in port ',PORT)
})