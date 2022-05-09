import React, {Component} from 'react'
import Form from './Form'
import TodoList from './TodoList.js'


import '../styles/styles.css'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      toDo:['Eat', 'Sleep']
    }
  }

  onMessageChange = (e) =>{
    this.setState({message:e.target.value})
    //console.log(this.state)
  }

  onMessageSubmit = (e) =>{
    e.preventDefault();
    let clone = [...this.state.toDo]
    clone.push(this.state.message)
    this.setState({message: '', toDo:clone})
    //console.log(this.state)
  }

  onCompleted = e => {
    e.target.classList.contains('completed') ? e.target.classList.remove('completed') : e.target.classList.add('completed')
  }

  hideCompleted = e =>{
    const select = document.querySelectorAll('.completed')
    const hidden = document.querySelectorAll('.hideCompleted')
    hidden.length > 0 ? hidden.forEach(a=>a.classList.remove('hideCompleted')) : select.forEach(a=> a.classList.add('hideCompleted'))
    //console.log(select)
  }

  render() {
    return (
      <div>
        Todos:
        <TodoList onCompleted ={this.onCompleted} toDo = {this.state.toDo}/>
        <Form  hideCompleted = {this.hideCompleted} onMessageChange ={this.onMessageChange} onMessageSubmit = {this.onMessageSubmit} messageValue ={this.state.message}/>   
      </div>
    )
  }
}



//input for user to add todos
//onclick functionality for todos, change class = completed !completed
//button to hide completed, setting class completed display = none;
//list to map over prop array passed