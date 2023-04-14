import React, { useState } from 'react'
import { useEffect } from 'react'

function UseEffect() {
const [count ,setCount]=useState(0)

useEffect(()=>{
   document.title = `clicked ${count} times`
   console.log("useEffect runs" + count )
})

  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick = {()=> setCount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffect
