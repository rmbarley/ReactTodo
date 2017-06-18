import React, { PropTypes } from 'react';


const Todo = React.createClass({
  render () {
    var { id, text } = this.props;

    return (
      <div>{ id }: { text }</div>
    );
  }
})

export default Todo;
