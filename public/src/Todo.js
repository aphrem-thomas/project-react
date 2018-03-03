import React from 'react';
import EnterTodo from './EnterTodo.js'
export default class Todo extends React.Component{
    render(){
        return(
            <div>
                <div id="entertodo">
                    <EnterTodo/>
                </div>
            </div>
        );

    }
}