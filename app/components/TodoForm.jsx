var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var entry = this.refs.entry.value;

    if (entry.length > 0) {
      this.refs.entry.value = '';
      //this.props.onAddTodo(entry);
      dispatch(actions.addTodo(entry));
    } else {
      this.refs.entry.focus();
    }

  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="to-do-form">

          <input type="text" ref="entry" placeholder="Please enter a to-do entry"/>
          <button className="button expanded">Submit</button>

        </form>
      </div>
    );
  }

});

export default connect()(TodoForm);
//module.exports = TodoForm;
