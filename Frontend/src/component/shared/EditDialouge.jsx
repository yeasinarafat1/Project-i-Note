import { Dialog, Transition } from '@headlessui/react'
import {  useQueryClient } from '@tanstack/react-query'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../constant'

export default function MyModal({ title,note,id,setshowNote}) {
  const queryclient = useQueryClient()
  // const [editTitle, setEditTitle] = useState(second)  
  const defaultValue = {
    title,
    note
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: {isSubmitting },
    
  } = useForm({defaultValue})
  

  const editNote = async(data)=>{
    const {title,note} = data
    const res = await fetch(`${BASE_URL}/note/edit`,{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      title,
      note
    })
    })
    if(!res.ok){
      toast.error('Failed to edit note',{theme:'dark'})
      return
    }
    
    queryclient.invalidateQueries({queryKey:['allNotes']})
    
    closeModal()

    toast.success('Note edited successfully',{
      theme:'dark'
    })
    
  }
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className=" "
        >
          <img src="edit.svg" alt="" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 bg-indigo-950 rounded-lg" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Note
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(editNote)}  className="ct aspect-ratio h-[8/5] w-full  container   items-center justify-center flex-row md:pl-10  ">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Enter the Tittle of the Note</span>

                      </div>
                      <input id="title" {...register("title",{required:true})} defaultValue={defaultValue.title}  type="text" placeholder="Enter Title" className="input input-bordered w-full md:max-w-2xl" />

                      <div className="label">
                        <span className="label-text">Enter the Note content</span>

                      </div>
                      <textarea placeholder="Add Note" defaultValue={defaultValue.note} {...register("note",{required:true})} className="textarea textarea-bordered textarea-md w-full max-w-xs" id="textarea" ></textarea>
                      <div className="label">

                      </div>
                    </label>
                    <div className="flex gap-2">
                    <button className="btn btn-active btn-error" onClick={(e)=>{e.preventDefault();closeModal()}}>Cancel</button>
                    <button className="btn btn-active btn-neutral" type='submit'>{isSubmitting ?'submiting...' : "Edit Note"}</button>
                    </div>

                  </form>

              
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
