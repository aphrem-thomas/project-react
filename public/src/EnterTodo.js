import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem.js';
import * as actionCreator from './actionCreator/actionCreator.js';

class EnterTodo extends React.Component{
    constructor(props){
        super(props);

    }
    handleSubmit(){
        var todoValue=$("#EnterTodoId").val();
        this.props.dispatch(actionCreator.addEvent(todoValue));
        $("#EnterTodoId").val('');
    }
   
    
    render(){
        return(
         <div>
            <input type="text" className="form-control" id="EnterTodoId" aria-describedby="emailHelp" placeholder="Enter Todo"/>
            <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
            {this.props.state1.map((jobs)=>{
                if(jobs.id!=0){
                return (
                    <div id="todoitem">
                        <TodoItem key={jobs.id} items={jobs.todoList} itemKey={jobs.id}/>
                    </div>
                )}
                })}
            
        </div>
        );

    }
} 
function mapStateToProps(state,ownProps){
    return{state1:state.TodoReducer};

}

function mapDispatchToProps(dispatch){

}

export default connect(mapStateToProps)(EnterTodo);

{/* <ul>
                {this.props.state.map(item=>{
                    <li id={item.id}>{item.todoList}</li>
                })}
            
            </ul>
    
    
    <form name="todoform">
                <div className="form-group">
                    <label >Enter Todos</label>
                    <input type="text" className="form-control" id="EnterTodoId" aria-describedby="emailHelp" placeholder="Enter Todo"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
               
            <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form> */}