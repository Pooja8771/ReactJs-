import React from 'react'
 // {std} paramenter is passed as props and is destructured 
function StuComponent({std}) {
  return (
    <div>
      <h1>{std.name} and {std.age} </h1>
    </div>
  )
}

export default StuComponent
