import { useForm } from "react-hook-form"
import { useAuthContext } from "../contex/authContex"
import {useNavigate} from 'react-router-dom'

import {toast} from 'react-toastify'
import { BASE_URL } from "../constant"
import { useEffect } from "react"
// eslint-disable-next-line react/prop-types
const ChangePassword = ({isLogedIN}) => {
  useEffect(() => {
    document.title = "i-Note/change password" 
    }, [])
    const Navigate = useNavigate()
    const {authUser, setAuthUser} = useAuthContext()
    const {
        register,
        handleSubmit,
        reset,
        formState: {isSubmitting },
      } = useForm()
      const onSubmit = async(data) => {
        
      
        
        const {oldPassword,newPassword,confirmPassword} = data
        if(newPassword!=confirmPassword){
         toast.error('New password and confirm password must be same ',{theme:"dark"})
         return   
        }
        if(oldPassword==newPassword){
            toast.error("Old password and New password cant't be same be same" ,{theme:"dark"})
            return   
        }
        try {
            let a = await fetch(`${BASE_URL}/auth/changepassword`,{
                method:"PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                
                body:JSON.stringify({_id:authUser?._id,oldPassword,newPassword}),
            
            })
            let resposnse = await a.json()
            if(resposnse.error){
                toast.error(data.error,{theme:"dark"})
                console.log(resposnse.error)
                return
            }
            
            console.log(resposnse)
           localStorage.clear()
           setAuthUser(null)
           toast.success('password changed successfully')
           Navigate('/')

        } catch (error) {
            console.log(error)
            toast.error('something went wrong',{theme:'dark'})
        }
        reset()
      }
      useEffect(() => {
        if(!isLogedIN){
          console.log(isLogedIN)
          Navigate('/login')
          return
        }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isLogedIN])
      
  return (
    <div className="min-h-custom flex items-center justify-center w-full dark:bg-gray-950 ">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-8 max-w-md ">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">{`Changing password for ${authUser?.email}`}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Old password</label> */}
            <input type="password" {...register("oldPassword",{required:{value:true,message:"Email is required"}})} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter old password"  />
          </div>
          <div className="mb-4">
            {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label> */}
            <input type="password" {...register("newPassword",{required:{value:true,message:"password is required"}})} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter  password" required />
            {/* <a href="#" className="opacity-0 text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a> */}
          </div>
          <div className="mb-4">
            {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label> */}
            <input type="password" {...register("confirmPassword",{required:{value:true,message:"password is required"}})} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirm new password password" required />
            {/* <a href="#" className="opacity-0 text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a> */}
          </div>
          
          <button disabled={isSubmitting} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="submit">Change password</button>
        </form>
        </div>
        </div>
  )
}

export default ChangePassword
