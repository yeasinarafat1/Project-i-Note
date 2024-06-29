import express from 'express'
import login from '../controler/login.js';
const router  = express.Router()
router.post('/',login)
export default router;