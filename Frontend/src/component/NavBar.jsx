/* eslint-disable react/prop-types */
import {  Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState,useEffect, useRef } from 'react';
import { useAuthContext } from '../contex/authContex';
import { useSearchContext } from '../contex/SearchContex';

const NavBar = ({isLogedIN,setisLogedIN}) => {
  const cross = useRef()
  const [profile, setprofile] = useState('profile.jpg')
  const {authUser:user} = useAuthContext()

  const {searchInp,setsearchInp} = useSearchContext()
  const Navigate = useNavigate()

  useEffect(() => {
    
    if(user?.profile){
      setprofile(user.profile)
    }
   
  }, [user])
  
  const logout = ()=>{
    localStorage.clear()
    toast('successfully loged out',{theme:"dark"})
    setisLogedIN(false)
    Navigate('/login')
    return


  }
  useEffect(() => {
  if(searchInp.length>0){
    cross.current.style.display = "block"
  }else{
    cross.current.style.display = "none"
  }
  }, [searchInp])
  
  const clearSearch = ()=>{
    setsearchInp('')
  }
  return (
    <div className="navbar bg-base-100 w-100vw border-box">
  <div className="flex-1">
    <Link to='/'  className="btn btn-ghost text-xl">i-Note</Link>
  </div>
  <div className="flex-none gap-2">
    {isLogedIN ? <><div className="form-control relative">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={searchInp} onChange={(e)=> setsearchInp(e.target.value)} />
      <img onClick={clearSearch} ref={cross} className='absolute right-1 bottom-4 h-4 cursor-pointer displayNone' src="cross.svg" alt="" />

    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img className='object-cover' alt="" src={ profile} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
           {user?.fullName}
          </a>
        </li>
        <li><Link to='/changepassword'>Change Password</Link></li>
        <li><Link to='/about'>About me</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div></> : <><NavLink to='/login' className='btn btn-active btn-neutral md:px-8 hover:bg-slate-900'>Login</NavLink><NavLink to='/signup' className='btn btn-primary text-gray-300 md:px-8'>Signup</NavLink></>}
  </div>
</div>
  )
}

export default NavBar;
