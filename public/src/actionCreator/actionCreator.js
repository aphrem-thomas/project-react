import CourseApi from '../api/mockCourseApi.js'

export function addEvent(todoValue){
    return {type:'ADD_EVENT', payload:todoValue};
}

export function deleteEvent(itemKey){
    return {type:'DELETE_EVENT', payload:itemKey};
}

export function getCourses(courses){
   // console.log("inside getCourses");

    return({type:'GET_COURSES',payload:courses});
}

export function get_courses(message){
    return function(dispatch,getState){
        console.log(message);
        return CourseApi.getAllCourses().then(courses=>{
            dispatch(getCourses(courses));
            //console.log(courses);
        }).catch((error)=>{throw(error);});
    }

}