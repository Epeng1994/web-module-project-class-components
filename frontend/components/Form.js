import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit = {this.props.onMessageSubmit}>
          <input placeholder = 'Type Todo' name = 'message' onChange = {this.props.onMessageChange} value = {this.props.messageValue}></input>
          <button type='submit'>Submit</button>
        </form>
        <div>{this.props.errors}</div>
        <button onClick = {this.props.hideCompleted}>Hide completed</button>
      </div>
    )
  }
}
