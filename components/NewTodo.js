import React from 'react';

import TodoList from './TodoList.js';

// var TodoList = React.createClass({
//   render: function() {
//     var createItem = function(item) {
//       return <li key={item.id}>{item.text}</li>;
//     };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }
// });

export default React.createClass({
  getInitialState: function ()
  {
    return {items: [{id: 1, text: 'Buy milk' , active:true}], text: ''};
  },
  onChange:function(e)
  {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now(), active: true}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  handledelete: function(e) {
    var nexr
  },
  render: function()
  {
    return (
        <div>
        <span>New Todo</span>
        <TodoList todos={this.state.items} />
        <input type='text' onChange={this.onChange} value= {this.state.text} />
        <input type='button' value='Add' onClick={this.handleSubmit} />
        </div>
    );
  }
});
