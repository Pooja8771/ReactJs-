import React, { Component } from 'react'

export default class UnMountChild extends Component {

    componentWillUnmount(){
        console.log("copmonent will unmount called")
    }
  render() {
    return (
      <div>
        <h1>How Are You?!!!!!</h1>
      </div>
    )
  }
}
