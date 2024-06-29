import { useState } from "react"

import { motion } from "framer-motion"
import { useAuthContext } from "../contex/authContex"

import {textVariant} from '../utils/motion'
import Card from "./shared/Card"
import { useQuery } from "@tanstack/react-query"
// eslint-disable-next-line react/prop-types
const NotesDisplay = ({  setshowNote }) => {
  const {data:noteArr,isLoading} = useQuery({queryKey:['allNotes']})
  

  const {authUser} = useAuthContext()
  
  if(!authUser){
    return <div>Loading</div>
  }

 
  

  return (
    <div className="">
      <motion.div variants={textVariant()} className="text-4xl text-center">Your Notes</motion.div>
      <div className="flex flex-row gap-7 items-center flex-wrap transition-all ">
        {noteArr?.length === 0 && ( // Check if length is 0 using logical AND
          <p className="text-xl text-center flex items-center justify-center w-full mt-10">No Note to display.</p>
        )}
        {isLoading ? <div className="flex items-center justify-center w-full h-[50vh]"><span className="loading loading-spinner loading-lg"></span></div>: ""}
         {/* eslint-disable-next-line react/prop-types */}
        {noteArr?.map((notes, index) => {
          return <Card key={notes._id} notes={notes} index={index}  />
        })}
      </div>
    </div>
  )
}

export default NotesDisplay
