import React, { useEffect, useState } from 'react'

function UsEffect2() {

   const [count, setCount]= useState(0)


    useEffect (()=>{

        if(count >= 1){
            document.title = `chat  ${count}`
        }
        else {
            document.title= `chat`
        }

    },[count]) 
    useEffect(() =>{
        console.log("i am useeffect2")
    },[])


      console.log("outside");

  return (
    
    <div>
      <h1> Count :{count}</h1>
      <button onClick = {()=>setCount(count+1)}>ClickMe </button>
    </div>
  )
}

export default UsEffect2
