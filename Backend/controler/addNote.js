
import noteModel from "../models/notes.js";
const addNote = async(req,res)=>{
    const {senderId,title,note} = req.body
    try {
        const newNote = await noteModel({senderId,title,note})
        await newNote.save()
        res.status(200).json({newNote})
    } catch (error) {
        res.status(404).json({error:"Failed to add note"})
    }
    

}
export default addNote;