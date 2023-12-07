import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div id={this.props.task.isshow?"card12":null}>
        <h1>{this.props.task.action} </h1>
        <button onClick={()=>{this.props.deletefunction(this.props.task.id)}}>delete</button>
        <button onClick={()=>{this.props.complete2(this.props.task.id)}}>complete</button>
        
      </div>
    )
  }
}
