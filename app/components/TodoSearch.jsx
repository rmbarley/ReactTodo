import React, { PropTypes } from 'react'

const TodoSearch = React.createClass({
  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value.toLowerCase();

    this.props.onSearch(showCompleted. searchText);
  },
  render () {
    return (
      <div>
        <div>
          <input type="search"
                 ref="searchText"
                 placeholder="Search List"
                 onChange={ this.handleSearch }/>
        </div>
        <div>
          <label>
            <input type="checkbox"
                   ref="showCompleted"
                   onChange={ this.handleSearch }/>
            Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
})

export default TodoSearch
