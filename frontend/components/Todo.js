import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick = {this.props.onCompleted}>
        {this.props.message}
      </div>
    )
  }
}
