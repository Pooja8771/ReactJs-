import React, { Component } from 'react'

// child component of Mounting 1 component
export default class Mounting2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name :"Pooja"
      }
      console.log("Mounting2  constructor invoked")
    }

     static getDerivedStateFromProps(props,state){
        console.log("Mounting 2 getDerivedStateFromProps invoked")
        console.log(props);
        console.log(state);
        // return null
     }

    componentDidMount(){
        console.log("componetDidMount 2 Invoked");

    }
  render() {
    console.log("Mounting 2  render  invoked")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </div>
    )
  }
}

