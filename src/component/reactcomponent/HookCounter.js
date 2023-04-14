import React ,{useState} from 'react'

function HookCounter() {
     const initialCount =0
    const [count ,setCount] =useState(initialCount)
     let incrementCount =()=>{
        for(let i=0; i<5; i++){
        setCount(prevCount =>prevCount+1)
    
     }
     
    }
  return (
    <div>
      Count:{count}
      <button onClick = {()=> setCount(count +1)}>Addition</button>
      <button onClick ={()=> setCount(count-1)}>Subtraction</button>
      <button onClick ={incrementCount}>Increment5</button>

    </div>
  )
}

export default HookCounter
