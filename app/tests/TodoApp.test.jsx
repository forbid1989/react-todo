var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

  it('should exist', () => {

    expect(TodoApp).toExist();

  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    //Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle todo from completed to incompleted', () => {

    var todoData = {
      id:11,
      text: 'Text features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(false);
    //Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

  //Test that when toggle from true to false, completedAt get removed
});
