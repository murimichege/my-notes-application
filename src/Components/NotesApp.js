import React, { useEffect, useState } from 'react'
// import notes from '../Assets/data'

// import ListItem from './components/ListItem'
import AddButton from './AddButton'
import ListItem from './ListItem'

function NotesApp() {

useEffect(() => {
  getNotes()
}, [])

let [notes, setNotes] = useState([])
// fetch data from api
let getNotes = async() => {
let response = await fetch(' ')
let data = await response.json()

setNotes(data)
}



  return (
  <div className='notes'>

    <div className='notes-header'>
      
      <h1 className='notes-title'>&#9782;Notes</h1>
      <p className='notes-count'>{notes.length}</p>
    </div>
    <AddButton/>

  <div className='notes-list'>
      {notes.map(mynote => (

      <ListItem mynote = {mynote} key={mynote.id}/>
      ))}
   </div>
    
 </div>
  )
}

export default NotesApp;