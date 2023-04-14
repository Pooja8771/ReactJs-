import React ,{ useState }from 'react'

function USComponent() {
 const [name ,setName]  = useState("Pooja")
 let changeState =()=>{
    setName("Harsh")
 }
  return (
    <div>
        <h1>{name}</h1>
      {/* <button type="button" onClick= {()=>{setName("Rahul")}}>Update</button> */}
      <button onClick = {changeState}>Click</button>
    </div>
  )
}

export default USComponent
