import noteModel from "../models/notes.js";
const findNote = async(req,res)=>{
   const {id} = req.params
   const notes = await noteModel.find({senderId:id})
    res.json({notes})
}
export default findNote;