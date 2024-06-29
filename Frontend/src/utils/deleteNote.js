import { toast } from "react-toastify"

const deleteNoteFunc = async (baseUrl,id) => {
    try {
      await fetch(`${baseUrl}/note/delete/${id}`, {
        method: "DELETE"
      })
      console.log(id)
      toast.success('Note deleted',{
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
  
      })
      
    } catch (error) {
      console.log(error)
    }
}

export default deleteNoteFunc;
