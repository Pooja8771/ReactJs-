import React, { Component } from 'react'
import UnMountChild from './UnMountChild'

export default class UnMountParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active :true
      }
    }
    
    changeState =()=>{
        this.setState ({
            active:false
        })
    }
  render() {
    console.log("Parent render called")
    return (
      <div>
      {this.state.active ? <UnMountChild />:<h1>Component Delelted</h1> }  
        <button onClick ={this.changeState}> Change state</button>
      </div>
    )
  }
}
