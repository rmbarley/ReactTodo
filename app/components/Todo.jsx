import React, { PropTypes } from 'react';


const Todo = React.createClass({
  render () {
    var { id, text, completed, createdAt } = this.props;

    return (
      <div onClick={ () => {
          this.props.onToggle(id);
        } }>
        <input type="checkbox" checked={ completed } />
        { text }
      </div>
    );
  }
})

export default Todo;
