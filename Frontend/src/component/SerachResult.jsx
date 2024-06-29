import { useState } from "react"

import { useAuthContext } from "../contex/authContex"
import { useSearchContext } from "../contex/SearchContex"

import Card from "./shared/Card"
import { useQuery } from "@tanstack/react-query"
// eslint-disable-next-line react/prop-types
const SearchReasult = ({  setshowNote }) => {
 

  const {authUser} = useAuthContext();

  const {searchInp} = useSearchContext();
  const {data:noteArr,isLoading} = useQuery({queryKey:['allNotes']})
  
  if(!authUser){
    return <div>Loading</div>
  }





  return (
    <div className="">
      <h3 className="text-4xl text-center">Search Result for {searchInp}</h3>
      <div className="flex flex-row gap-7 items-center flex-wrap ">
        {isLoading ? <span className="loading loading-spinner loading-lg"></span>
 : ""}
        {/* eslint-disable-next-line react/prop-types */}
        {noteArr?.map((notes) => {
            if(notes.title.toLowerCase().includes(searchInp) || notes.note.toLowerCase().includes(searchInp.toLowerCase())){
                return <Card key={notes._id} notes={notes} setshowNote={setshowNote} index={'!!'} />
            }
         
        })}
      </div>
    </div>
  )
}

export default SearchReasult;

