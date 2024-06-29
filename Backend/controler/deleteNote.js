import noteModel from "../models/notes.js";
const deleteNote = async(req,res)=>{
   try {
    let id = req.params.id
    await noteModel.findByIdAndDelete(id)
      
      res.status(200).json({success:"Note deleted successful"})
   } catch (error) {
        res.status(404).json({error:"Failed to delete note"})
   }
}
export default deleteNote;