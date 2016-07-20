import React from 'react';
import Visibility from './Visibility.js'
import ClearCompleted from './ClearCompleted.js'

export default React.createClass({
    render: function() {
        return (
            <div>
            <span> number of items : {this.props.todos.length} </span>
            <Visibility />
            <ClearCompleted />
         </div>
        );
    }
});
