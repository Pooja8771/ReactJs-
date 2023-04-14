import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Pooja"
      }
      console.log("Constructor called")
    }

    ChangeState =()=>{
        this.setState({
            name :"Rahul"
        })
        console.log("Button clicked")
    }

    shouldComponentUpdate(nextProps ,nextState){
      console.log("ShouldComponentUpdate called...")
      console.log(nextProps);
      console.log(nextState);
      return false

    }
    getSnapshotBeforeUpdate(prevProps ,prevState){
        console.log("getSnapshotComponentbeforeUpdate called...")
        console.log(prevProps);
        console.log(prevState);
        return "hello"
  
      }

      componentDidUpdate(prevProps,prevState,snapshot){
        console.log("copmonentdidupdated")
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
        

      }

  render() {
    console.log("Rendering")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button onClick={this.ChangeState}>
         Button
        </button>
      </div>
    )
  }
}
