import React from 'react'

function ClickButton(props) {

    // EventHandler

   const HelloFunction=(name)=>{
        alert("Hello World! " +name)
       
      
    }
  return (
    <div>
      <input type="button" value="Click" onClick ={() =>HelloFunction(props.name)} />
    </div>
  )
}

export default ClickButton
