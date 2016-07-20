import React from 'react';
import ReactDOM from 'react-dom';
import TodoManager from './components/TodoManager.js';

// const Hello = React.createClass({
//   render:function () {
//     render: return <h1>Hello </h1>;
//   }
// });

ReactDOM.render(<TodoManager  />,
                document.getElementById('content'));
