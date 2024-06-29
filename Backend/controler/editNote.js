import noteModel from "../models/notes.js";

const editNote = async (req,res)=>{
    const {id,title,note} = req.body
    try {
      const Note =await noteModel.findById(id)
      if(!Note){
        res.status(400).json({error:"No note by this id"})
      } 
      Note.title = title;
      Note.note = note;
      Note.save()
      res.status(200).json(Note)
    } catch (error) {
        console.log(error)
    }
}
export default editNote;