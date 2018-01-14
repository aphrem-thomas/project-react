import React from 'react';

class CourseItem extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.course.title}</div>
            </div>
        );
    }
}

export default CourseItem;