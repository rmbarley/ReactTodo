import React, { PropTypes } from 'react'

import TodoList from 'TodoList';

const TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {id: 1,
        text: 'Walk the dog'},
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Clean the house'
        },
        {
          id: 4,
          text: 'Wash the car'
        }
      ]
    }
  },
  render () {
    var { todos } = this.state;
    return (
      <div><TodoList todos={ todos }/></div>
    );
  }
})

export default TodoApp;
