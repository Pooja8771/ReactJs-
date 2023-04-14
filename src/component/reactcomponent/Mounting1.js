import React, { Component } from 'react'
import Mounting2 from './Mounting2'
export default class Mounting1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name :"Pooja React Developer"
      }
      console.log("Mounting1 constructor invoked")
    }

     static getDerivedStateFromProps(props,state){
        console.log("Mounting1 getDerivedStateFromProps invoked")
        // console.log(props);
        // console.log(state);
         return null
     }

    componentDidMount(){
        console.log("componetDidMount Invoked");

    }
  render() {
    console.log("Mounting1 render  invoked")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <Mounting2 name ="Rahul"/>
      </div>
    )
  }
}
