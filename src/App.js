 import React, { Component } from 'react'
 import './App.css'
import Tasklist from './components/tasklist'
import Addnew from './components/addnew'
 
 export default class App extends Component {
  state={
    todos:[
      {id:Math.random(),action:"wake up",isshow:true},
      {id:Math.random(),action:"go back",isshow:false}
    ],
    newAction:"hello",
  }
  handledelete=(THEID)=>{this.setState({todos:this.state.todos.filter(el=>el.id!==THEID)})

  }
  handlecomplete= (ID)=>{ this.setState({ todos:this.state.todos.map(el=>el.id===ID?{...el,isshow:!el.isshow}:el)})

  }
  handlechange=(x)=>{this.setState({newAction:x})}
  handleadd=(y)=>{this.setState({todos:[...this.state.todos,y]})}
   render() {
    
     return (
       <div>
        <Tasklist list= {this.state.todos}  deletefun={this.handledelete}  complete1={this.handlecomplete}/>
         <br/>   <br/><Addnew newAction={this.state.newAction} handlechange={this.handlechange}/>
       </div>
     )
   }
 }
 

