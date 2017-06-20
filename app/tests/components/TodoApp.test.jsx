import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import * as $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  it('should add todo to state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  it('should toggle completed value when handleToggle is called', () => {
    var todoData = {
      id: 11,
      text: 'Test component',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });
  // test that when toggle from true to false, completedAt gets removed
  it('should toggle todo from completed to incompleted', () => {
    var todoData = {
      id: 11,
      text: 'Test component',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    // expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });
});
