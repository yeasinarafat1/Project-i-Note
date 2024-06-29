import { useQueryClient } from "@tanstack/react-query"
import CopyButton from "../../CoppyButtun"
import { BASE_URL } from "../../constant"
import deleteNoteFunc from "../../utils/deleteNote"
import EditDialouge from './EditDialouge'

// eslint-disable-next-line react/prop-types
const Card = ({notes:{title,note,_id},index}) => {
  const queryclient = useQueryClient()
    const deleteNote = async (id) => {
        
       try {
        await deleteNoteFunc(BASE_URL,id)
        queryclient.invalidateQueries({queryKey:['allNotes']})
    
       } catch (error) {
        console.log(error)
       }
       finally{
        
       }
      }
  
  return (
    <div>
    <div  className="card w-80 md:w-96 bg-base-100 shadow-xl" >
      <div className="card-body relative">
        <div className="absolute bg-blue-950 rounded-full right-4 top-6 size-9 flex justify-center items-center cursor-pointer hover:bg-gray-800"><EditDialouge title={title} note={note} id={_id} /></div>
        <h2 className="card-title">{index + 1}.{title}</h2>
        <div className="p overflow-auto">{note}</div>
        <div className="card-actions justify-end">
           {/* eslint-disable-next-line react/prop-types */}
          <CopyButton text={note}/>
          <button className="btn btn-error" id={_id} onClick={() => deleteNote(_id)}><img src="delete.svg" alt="" /></button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
