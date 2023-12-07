import React, { Component } from 'react'
import Card from './card'

export default class Tasklist extends Component {
  
  render() {
    return (
      <div>
        {this.props.list.map(el=><Card task={el} deletefunction={this.props.deletefun}  complete2={this.props.complete1 }/> )}
        
      </div>
    )
  }
}
