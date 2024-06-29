import jwt from 'jsonwebtoken'
const gneratecookie =(userid,res) => {
  const token = jwt.sign({userid},process.env.JWT_SCRET,{
    expiresIn:"10d"
  })
  res.cookie("jwt",token,{
    maxAge:10*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict"
  })
}
export default gneratecookie;