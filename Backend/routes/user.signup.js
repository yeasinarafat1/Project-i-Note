import express from 'express'
import user from '../models/user.js'
import signup from '../controler/signup.js'
const router = express.Router()
router.get('/',(req,res)=>{
    res.send("Express router working")
})
router.post('/',signup)
export default router;