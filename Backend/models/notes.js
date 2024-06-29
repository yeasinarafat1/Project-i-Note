import mongoose  from "mongoose";
const noteSchema = new mongoose.Schema({
    senderId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    }
});
const noteModel = new mongoose.model('notes',noteSchema);
export default noteModel;