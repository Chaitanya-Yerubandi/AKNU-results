import React, { useEffect, useState } from 'react'

export default function Page2() {



  const [count , setCount]= useState(0);

  useEffect(()=>{ 

    setTimeout(()=>{
        
     setCount(()=>count+1)
       
    },5000)

  })



  return (
   <>
   
   <div className='col-md-10'>
        
     <h1>{count}</h1>

    </div>
   </>
  )
}