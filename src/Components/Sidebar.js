import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
    
    <div className='col-md-2 sidebar'>
     
     <div className='menu'>
      <ul>
    <li><Link to="page1">Page1 click</Link></li>

    <li><Link to="page2">Page2 click</Link></li>
    <li><Link to="students">Studentlist</Link></li>
    
    <li><Link to="add">AddStudent </Link></li>
      
      </ul>
     </div>

    </div>
    
    </>
  )
}