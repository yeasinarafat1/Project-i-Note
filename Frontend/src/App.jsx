import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import LoginForm from './component/LoginForm'
import SignUpForm from './component/SignupForm'
import Home from './component/Home'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import { useAuthContext } from './contex/authContex'
import AboutMe from './component/AboutMe'
import ChangePassword from './component/ChangePassword'

function App() {
  const [isLogedIN, setisLogedIN] = useState(true)
const {authUser} = useAuthContext()
useEffect(() => {
  console.log('%cWellcome to %ci-Note','color:yellow;font-size:4rem;font-weight:bold;font-family:system-ui;','font-family:system-ui;;color:red;font-size:4rem;font-weight:bold;')
}, [])

useEffect(() => {
    if(authUser==null){
      setisLogedIN(false)
    }
    else{
      setisLogedIN(true)
    }
}, [authUser]);


  const router = createBrowserRouter([
    {
      path:"/",
      element:<><NavBar isLogedIN={isLogedIN} setisLogedIN={setisLogedIN}/><Home isLogedIN={isLogedIN}/></>
    },
    {
      path:'/about',
      element:<><NavBar isLogedIN={isLogedIN} setisLogedIN={setisLogedIN}/><AboutMe/></>,
    },
    {
      path: "/login",
      element: <><NavBar isLogedIN={isLogedIN} setisLogedIN={setisLogedIN}/><LoginForm isLogedIN={isLogedIN} setisLogedIN={setisLogedIN} /></>,
    },
    {
      path:"/signup",
      element:<><NavBar isLogedIN={isLogedIN} setisLogedIN={setisLogedIN}/><SignUpForm/></>,
    },
    {
      path:"/changepassword",
      element:<><NavBar isLogedIN={isLogedIN} setisLogedIN={setisLogedIN}/><ChangePassword isLogedIN={isLogedIN}/></>,
    }
  ]);
  // useEffect(() => {
  //  let user = localStorage.getItem('user')
  //  if(!user){
  //   na
  //  }
  // }, [])
  
  return (
   <div className='w-screen overflowX'>
    <RouterProvider router={router} />
    {/* <h2 className='text-center text-4xl'>Wellcome to i-Note</h2>
    <TextInput showNote={showNote} setshowNote={setshowNote} />
    <NotesDisplay showNote={showNote} setshowNote={setshowNote} />
    <Footer/> */}
   </div>
  )
}

export default App
