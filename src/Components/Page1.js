import React, { useState } from 'react'

export default function Page1(props) {

  
  return (
    <>
    
    <div className='col-md-10'>
     

      {
        props.data.map((e,i)=>{
    
            return(
              <>
              <h1>{e.name}</h1>
             <h1>{e.address}</h1>
              
              </>
            )

        })
      }

    </div>
    </>
  )
}