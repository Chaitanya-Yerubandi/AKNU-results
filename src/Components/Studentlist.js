import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Studentslist() {

    const [students, setStudents]=useState([])


    useEffect(()=>{
        setTimeout(()=>{
            axios.get('http://localhost:5000/api/getTrainees')
            .then(res=>setStudents(res.data.students))
        },1000)
    },[])

// Delete function
 const handleDelete=(_id)=>{
       
  // console.log(_id)

axios.delete('http://localhost:5000/api/deletestudent/'+_id)
.then((response)=>
{
 if(response.status==200)
 {
  alert("data deleted");

  window.location.href='/students'

 }
 
})}

// Delete functionend





  return (
    
    
    <>
  <div className='col-md-10'>
  <table align="center" border={1} width={600} className='table table-bordered'>
    <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>roll</th>
                <th>Email</th>
                <td>Actions</td>
            </tr>
       {
          students.map((e,i)=>{
           return(
            <>
              <tr>
              <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.roll}</td>
                <td>{e.email}</td>
                <Link to={`/editstudent/${e._id}`}><button className="btn btn-warning">Edit</button></Link>
                <td><button className='btn btn-danger' onClick={()=>handleDelete(e._id)} >Delete</button></td>
              </tr>
      
            
            </>


           )

          })
       }
       </table>
  </div>
  </>


  )
}