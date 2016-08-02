import React from 'react';
 import TodoList from './TodoList.js';
import NewTodo from './NewTodo.js';
import TodoFooter from './TodoFooter.js';
const todos = [
  {id: 1, text: 'Buy milk' , active:true},
  {id: 2, text: 'Do laundryy', active:false},
  {id: 3, text: 'Read a book', active:true}
];


export default React.createClass({
  render:function() {
    return (
        <div>
          <NewTodo />
          <TodoList todos={todos} />
         <TodoFooter todos={todos} />
        </div>

    );

  }
});
