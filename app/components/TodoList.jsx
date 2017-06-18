import React, { PropTypes } from 'react';

import Todo from 'Todo';

const TodoList = React.createClass({
  render () {
    var { todos } = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={ todo.id } { ...todo } />
        );
      });
    };
    return (
      <div>
        <div>
          { renderTodos() }
        </div>
      </div>
    );
  }
})

export default TodoList;
