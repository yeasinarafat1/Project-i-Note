import {useForm} from 'react-hook-form'
import { toast } from 'react-toastify';


import { Link,useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contex/authContex';
import { useEffect } from 'react';
import { BASE_URL } from '../constant';
import { useQueryClient } from '@tanstack/react-query';

// eslint-disable-next-line react/prop-types
const LoginForm = ({isLogedIN,setisLogedIN}) => {
  // const BASE_URL = 'http://localhost:5000'
  // const BASE_URL = 'http://192.168.43.1:5000'
  const queryclient = useQueryClient()
  useEffect(() => {
    document.title = "i-Note/Login" 
    }, [])
  useEffect(() => {
   if(isLogedIN){
    Navigate('/')
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogedIN])
  
  
  const {setAuthUser} = useAuthContext()
  const {
    register,
    handleSubmit,
    reset,
    formState: {isSubmitting },
  } = useForm()
  const onSubmit = async(data) => {
    console.log(data)
    const {email,password} = data
    try {
      let a = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      })
      let resposnse = await a.json()
      if(resposnse.error){
        toast.error(resposnse.error,{theme:"dark"})
      }
      console.log(resposnse)
      
      if(!resposnse.error){
        const {email,fullName,profile,_id} = resposnse
        setAuthUser({email,fullName,profile,_id})
        localStorage.setItem('user',JSON.stringify({email,fullName,profile,_id}))
        queryclient.invalidateQueries({queryKey:['allNotes']})

        setisLogedIN(true)
        toast.info(`loged in as ${fullName}`,{theme:"dark"})
  
      reset()
      
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong",{theme:"dark"})
    }
    
  }
  const Navigate = useNavigate()
  return (
    <div className="min-h-custom flex items-center justify-center w-full dark:bg-gray-950 ">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md ">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input type="email" {...register("email",{required:{value:true,message:"Email is required"}})} className="shadow-sm rounded-md w-full px-3 py-2 border-0 outline-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder:text-gray-500" placeholder="your@email.com"  />
          </div>
          <div className="mb-4 ">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input type="password" {...register("password",{required:{value:true,message:"password is required"}})} className="shadow-sm rounded-md w-full px-3 py-2 border-0 outline-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder:text-gray-500" placeholder="Enter your password" required />
            <a href="#" className="opacity-0 text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
          </div>
          
          <button disabled={isSubmitting} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7480ff] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="submit">Login</button>
        </form>
        <div className="flex items-center justify-between mb-4">
           
            <Link to="/signup" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</Link>
          </div>
      </div>
    </div>
  );
};

export default LoginForm;
