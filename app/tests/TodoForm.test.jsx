var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {TodoForm} = require('TodoForm');

describe('TodoForm', () => {

  it('should exist', () => {

    expect(TodoForm).toExist();

  });

  it('should dispatch ADD_TODO when valid todo text', () => {

    var todoText = 'Check mail';
    var action = actions.startAddTodo(todoText);

    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.entry.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {

    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.entry.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
