import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from "react-icons/ai";

function AddButton() {
    return (
      <Link to='/note/new' className='bottom-btn'>
         <AiFillPlusCircle />
      </Link>
  
  
      )
  }
  
  export default AddButton;