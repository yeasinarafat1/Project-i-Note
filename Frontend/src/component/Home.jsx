
import TextInput from './TextInput'
import NotesDisplay from './NotesDisplay'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contex/authContex'
import { useSearchContext } from '../contex/SearchContex'
import SerachResult from './SerachResult'
import FindNote from '../utils/FindNote'
import { BASE_URL } from '../constant'
import { useQuery } from '@tanstack/react-query'

// eslint-disable-next-line react/prop-types
const Home = ({isLogedIN}) => {
  const {searchInp} = useSearchContext()
  
  const {authUser:user} = useAuthContext()
    const Navigate = useNavigate()
    const {data,isLoading} = useQuery({
      queryKey: ['allNotes'],
      queryFn : async () => {
        let a = await fetch(`${BASE_URL}/note/find/${user._id}`)
    
        let note = await a.json()
        console.table(note.notes)
        return note.notes;
    }
    
    })
    useEffect(() => {
      document.title = "i-Note - Your personal Note Taking Application" 
    }, [])
    
    useEffect(() => {
      if(!isLogedIN){
        console.log(isLogedIN)
        Navigate('/login')
        return
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogedIN])
    


    
  return (
    <div>
    {!searchInp?<> <TextInput user={user}  /> 
     <NotesDisplay user={user}  /></> : <SerachResult  noteArr={data}/>}

    </div>
  )
}

export default Home
