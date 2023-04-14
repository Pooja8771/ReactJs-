import React, { useState } from 'react'

function UsWithObject() {
   const [person,setPerson] =useState({
    name: "kajal",
    age:24,
    work:"React developer",
    isYoung :true
   })

//    const changePerson =() =>{
//     setPerson({
//         name:"Rahal",
//         age:32,
//         work :"java Developer",
//         isYoung :false
//     })
//    }


// if want to change only one state we have to use prevState and spread opreator

const changePerson =()=>{
    setPerson(prevState =>{
        return{
            ...prevState,
            name:"Rahul"
        }
    })
}
  return (
    <div>
     
     <h1>{person.name}</h1>
     <h1>{person.age}</h1>
     <h1>{person.work}</h1>
     <h1>{person.isYoung.toString()}</h1>
     <button onClick = {changePerson}>Update Button</button> 
    </div>
  )
}

export default UsWithObject
