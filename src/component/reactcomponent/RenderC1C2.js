
import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

function RenderC1C2() {
// let name = "Raj";
// if (name == "Pooja"){
//     return <Component2 />
// }
// else{
//     return <Component1 />
// }
    
// const name = "Pooja";
// let data ;

// if(name == "Pooja"){
//     data = <Component2/>
// }
// else {
//     data = <Component1 />
// }
const name = "Raj";
    const age =18;
  return (
  
    <div>
      {/* {data} */}

     {name == "Pooja" ? <Component2/>:<Component1 />}

    </div>
  )
}

export default RenderC1C2
