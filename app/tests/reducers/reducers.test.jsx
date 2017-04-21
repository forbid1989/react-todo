var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchText);
    });

  });

  describe('showCompletedReducer', () => {
    //Test that the showCompleted status gets flip
    it('should flip showCompleted status', () => {
      var action = {
        type:'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false),df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);

    });

    //defined todos array with realistic todo item
    //generate action
    // call reducer and assert completed flipped

    it('should flip showCompleted and update completedAt', () => {

      var todo = [{
        id:11,
        text: 'Text features',
        completed: true,
        createdAt: 0,
        completedAt: 123
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 11
      };

      var res = reducers.todosReducer(df(todo), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);

    });

    it('should add existing todos', () => {

      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    });

  });

});
