//var React = require('react');
import React from 'react';
import * as Redux from 'react-redux';

//var TodoList = require('TodoList');
import TodoList from 'TodoList';
//var TodoForm = require('TodoForm');
import TodoForm from 'TodoForm';
//var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export var TodoApp = React.createClass({
  /*
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  */

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className = "page-title">Todo App</h1>

        <div className = "row">
          <div className = "column small-centered small-11 medium-6 large-5">
            <div className = "container">
              <TodoSearch/>
              <TodoList/>
              <TodoForm/>
            </div>
          </div>
        </div>
      </div>

    )
  }
});

export default Redux.connect() (TodoApp);
