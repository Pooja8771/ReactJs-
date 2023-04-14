// import React from 'react'

// destructuring props  in React

// function Customer({name,age}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   )
// }



//  function Customer(props) {
//     const {name ,age ,occupation} = props
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{occupation}</h1>
//     </div>
//   )
// }

import React, { Component } from 'react'

//  class Customer extends Component {
//   render() {
//     const{name,age} = this.props
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
        

//       </div>
//     )
//   }
// }


// destructuring using state using constructor method

 class Customer extends Component {
    constructor(){
        super()
        this.state ={
            name:"Rahul",
            age :30,
            city: "mumbai"
        }
    }
  render() {
    const {name,age,city} = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{city}</h3>
      </div>
    )
  }
}


export default Customer
