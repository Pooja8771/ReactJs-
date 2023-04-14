import React, { Component } from 'react'
import ChildUpdating2 from './ChildUpdating2'
export default class Updating1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name :"Ram Sita "
      }
    }
    ChangeState =()=>{
        this.setState({
            name : "Ram "
        })
    }
  render() {
    return (
      <div>
        <ChildUpdating2  name= {this.state.name}/>
        <button onClick={this.ChangeState}> Click Me</button>

      </div>
    )
  }
}
