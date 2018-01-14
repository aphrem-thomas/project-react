import React from 'react';
import {connect} from 'react-redux';
import *as actioncreator from './actionCreator/actionCreator.js';
import CourseItem from './courseItem.js';

class apiCall extends React.Component{
    displayCourses(course){
        course.map((item)=>{<div>{item}</div>});
    }

    clickhandler(){
        this.props.dispatch(actioncreator.get_courses());
    }
    iterator(item,id){
        console.log("inside iterator");
        return <div key={id}>{item.title}</div>;
    }

    render(){
        return(
        <div>
            <div>this calls api</div>
            {this.props.courses.map((item)=>{return <CourseItem key={item.id} course={item}/>})}
        </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return({courses:state.CourseReducer});
}
export default connect (mapStateToProps)(apiCall); 
        
        // <button className="btn btn-primary ml-auto" onClick={this.clickhandler.bind(this)} >Courses</button>

        // <h2>{this.displayCourses(this.props.courses).bind(this)}</h2>