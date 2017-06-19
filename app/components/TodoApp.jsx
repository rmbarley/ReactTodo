import React, { PropTypes } from 'react'

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
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
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText
    });
  },
  render () {
    var { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch }/>
        <TodoList todos={ todos }/>
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    );
  }
})

export default TodoApp;
