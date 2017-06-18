import React, { PropTypes } from 'react';


const Todo = React.createClass({
  render () {
    var { text, id } = this.props;

    return (
      <div>{ id }: { text }</div>
    );
  }
})

export default Todo;
