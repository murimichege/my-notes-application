import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { ReactComponent as ArrowLeft } from '../Assets/arrow-left.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom'

function NotePage({history}) {

    let [notes, setNotes] = useState([null])
    let params = useParams()
    // let note = notes.find(note => note.id ==`${params.id}`)
    
    useEffect(() =>{
      getNote()
    }, [params.id])
  
    let getNote = async() =>{
      if(params.id === 'new') return
      let response = await fetch(`${params.id}`)
      let data = await response.json()
  
      setNotes(data)
    }
// append link to the functons
    let createNote = async() => {
        await fetch(``, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...notes, 'updated': new Date()})
    })
    }
    
    let updateNote = async() => {
        await fetch(`${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...notes, 'updated': new Date()})
    })
    }

    let deleteNote = async() => {
        await fetch(`${params.id}`, {
          method: 'DELETE',
      
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notes)
      
        })
      
      }
      
      let handleSubmit = () => {
       if(params.id !=='new' && !notes.body){
        deleteNote()
        
       }else if(params.id !=='new'){
        updateNote()
       }else if(params.id === 'new' && notes !== null & notes !==''){
        createNote()
       }
       
      
      
      }
    

return (
    <div className='note'>
    <div className='note-header'>
      <h3>
      <Link to= '/'>
        <AiOutlineArrowLeft onClick={handleSubmit}/>
      </Link>
      </h3>

      <Link to= '/'>
    { params.id !=='new' ? (
      <button onClick={deleteNote}>Delete</button>

    ):(
      <button onClick={handleSubmit}>Done</button>
    ) }

      </Link>

    </div>

    <textarea onChange={e =>{setNotes({...notes, 'body': e.target.value})}} value={notes.body}></textarea>
    </div>
  )
}

export default NotePage;