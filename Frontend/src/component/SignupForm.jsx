import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constant";
import { useEffect } from "react";
const SignUpForm = () => {
  
  useEffect(() => {
    document.title = "i-Note/Signup" 
    }, [])
  
  const {
    register,
    handleSubmit,
    reset,
    formState: {isSubmitting },
  } = useForm()
  const onSubmit = async (data) => {
   
   try {
    const {fullName,email,password,confirmpassword} = data
    let a = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fullName,email,password,confirmpassword,gender:"male"})
    })
    let resposnse = await a.json()
    console.log(resposnse)
    if(resposnse.error){
      toast.error(resposnse.error,{theme:"dark"})
    }
    if(resposnse.newUser){
      toast("Account created succesfully")
      Navigate('/login')
    }
    reset()
   } catch (error) {
    console.log(error)
    toast.error('something went wrong',{theme:"dark"})
   }
  }
  const Navigate = useNavigate()
    return (
      <div className="min-h-custom flex items-center justify-center w-full dark:bg-gray-950 my-0">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">WelcomeTo i-Note</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input type="text" {...register("fullName",{required:true,})} className="shadow-sm rounded-md w-full px-3 py-2 border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 outline-0 " placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email"{...register("email",{required:true})} className="shadow-sm rounded-md w-full px-3 py-2 border-0 outline-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input type="password" {...register("password",{required:true})} className="shadow-sm rounded-md w-full px-3 py-2 border-0 outline-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
              <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 focus:ring-2 focus:ring-offset-2" disabled="">Confirm Password</a>
            </div>
            <div className="mb-4">
    
              
              <input type="password" {...register("confirmpassword",{required:true})} className="shadow-sm rounded-md w-full px-3 py-2 border-0 outline-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirm your password" required />
            </div>
            
            <button disabled={isSubmitting} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7480ff] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup</button>
          </form>
          <div className="flex items-center justify-between mb-4">
             
              <Link to="/login" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Already have an account Account</Link>
            </div>
        </div>
      </div>
    );
  };
  
  export default SignUpForm;