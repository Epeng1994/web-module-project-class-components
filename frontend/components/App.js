import React, {Component} from 'react'
import Form from './Form'
import TodoList from './TodoList.js'
import * as yup from 'yup'




const schema = yup.object().shape({
  message: yup.string().required('You don\'t have anything else to do?'),
})



export default class App extends Component {
  constructor(){
    super();
    this.state={
      message:'',
      toDo:['Eat', 'Sleep'],
      errors:''
    }
  }

  validation = (name, value) =>{
    yup.reach(schema, name).validate(value)
      .then(r=>{
        //console.log('good')
        this.setState({errors:''})
        let clone = [...this.state.toDo]
        clone.push(this.state.message)
        this.setState({message: '', toDo:clone})
      })
      .catch(err=>{
        this.setState({errors:err.errors[0]})
      })
  }

  onMessageChange = (e) =>{
    this.setState({message:e.target.value})
    //console.log(this.state)
    
  }

  onMessageSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
    this.validation('message', this.state.message)
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
        <Form errors = {this.state.errors} hideCompleted = {this.hideCompleted} onMessageChange ={this.onMessageChange} onMessageSubmit = {this.onMessageSubmit} messageValue ={this.state.message}/>   
      </div>
    )
  }
}



//input for user to add todos
//onclick functionality for todos, change class = completed !completed
//button to hide completed, setting class completed display = none;
//list to map over prop array passed