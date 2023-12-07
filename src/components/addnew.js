import React, { Component } from 'react'

export default class Addnew extends Component {
    handlesubmit=(e)=>{
        e.preventDefault()
        const newobj={
            id:Math.random(),
            action:this.props.newAction,
            isshow:false
        }
        {this.props.handleadd(newobj)}
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handlesubmit}>
            <input type="text" value={this.props.newAction} onChange={e=>this.props.handlechange(e.target.value)}/>
            <button type="submit">add</button>
        </form>
        
      </div>
    )
  }
}
