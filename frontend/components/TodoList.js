import React from 'react'
import Todo from './Todo.js'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.toDo.map(a=>{
          return <Todo onCompleted = {this.props.onCompleted} message = {a}/>
        })}
      </div>
    )
  }
}
