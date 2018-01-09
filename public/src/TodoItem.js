import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './actionCreator/actionCreator.js';
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleRemove=this.handleRemove.bind(this);
    }
    handleRemove(){
        //this.props.deleteEvent({type:"DELETE_EVENT", payload:this.props.itemKey});
        this.props.dispatch(actionCreator.deleteEvent(this.props.itemKey));
    }

    render(){
        var cardStyle={width: "500px",
                      
                    }; 
        var buttonStyle={float:"right"} 
        return(
            <div>
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <h4 className="card-title">{this.props.items}</h4>
                    <button className="btn btn-primary ml-auto" onClick={this.handleRemove} >Remove</button>
                </div>
          </div>
          </div>
        );
    }
}


function mapStateToProps(state, ownProps){
   return {state:state};
}
export default connect(mapStateToProps)(TodoItem);