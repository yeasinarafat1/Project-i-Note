import express from 'express'
import changePassword from '../controler/changePassword.js';
const Router = express.Router()
Router.put('/',changePassword)
export default Router;