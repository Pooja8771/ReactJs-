import React, { useState,useEffect } from 'react'

function UsCleanUp() {

   const [count ,setCount ] = useState(0)
    
   useEffect (()=>{
     const interval = setTimeout(() => {
        setCount(count => count+1);
     },1000);
     console.log(" setTime out working")
    return ()=>{
        clearInterval(interval)
    }
   } ,[])
   

  return (
    <div>
      <h1> Timer :{count}</h1>
    </div>
  )
}

export default UsCleanUp
