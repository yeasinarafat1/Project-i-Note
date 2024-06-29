import {toast} from "react-toastify"
import { useAuthContext } from "../contex/authContex"
import {BASE_URL} from '../constant'
import { useQueryClient } from "@tanstack/react-query"
// eslint-disable-next-line react/prop-types
const TextInput = () => {
  const {authUser:user} = useAuthContext()
  const queryclient = useQueryClient()
  const addNote =async ()=>{
   
    const {_id:senderId} = user

    
    let tinput = document.getElementById("title")
    let tarea = document.getElementById("textarea")
    let title = tinput.value
    let note = tarea.value
    
    if (title.length!=0 && note.length!=0) {
      try {
        await fetch(`${BASE_URL}/note/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({senderId,title,note})
    })
    tinput.value = ""
    tarea.value  =""
    queryclient.invalidateQueries({queryKey:['allNotes']})
    toast.success('Note added sucessfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
         
      
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong',{theme:"dark"}) 
      }
    } else {
      toast.error('Title box and note box could not be empty',{
        theme:"dark",
       
      })
    }

  }
  return (
    <>
    
    <form className="ct aspect-ratio h-[8/5] w-full  container   items-center justify-center flex-row md:pl-10  ">
     <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Enter the Tittle of the Note</span>
    
  </div>
  <input id="title" type="text" placeholder="Enter Title" className="input input-bordered w-full md:max-w-2xl" />
  
  <div className="label">
    <span className="label-text">Enter the Note content</span>
    
  </div>
  <textarea placeholder="Add Note" className="textarea textarea-bordered textarea-md w-full max-w-xs" id="textarea" ></textarea>
  <div className="label">
 
  </div>
</label>
<button className="btn btn-active btn-neutral " onClick={(e)=>{e.preventDefault();addNote()}}>Add Note</button>

    </form>
    </>
  )
}

export default TextInput
