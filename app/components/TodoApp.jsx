import React, { PropTypes } from 'react'

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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
  handleAddTodo(text) {
    alert('New Todo: ' + text);
  },
  render () {
    var { todos } = this.state;
    return (
      <div><TodoList todos={ todos }/>
      <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    );
  }
})

export default TodoApp;
