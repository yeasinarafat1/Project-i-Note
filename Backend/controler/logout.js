const logout = async(req,res)=>{
    res.cookie("jwt","",{
        maxAge:0
    })
    res.status(200).json({messege:"Logout successful"})
}
export default logout;