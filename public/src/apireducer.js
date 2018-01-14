export function apiReducer(state=[],action){
    switch(action.type){
        case 'GET_COURSES':{
            //console.log("inside apiReducer, state is"+action.payload);
            let newState= action.payload;
            state=newState;
            return state;
        }break;
        default: state;
    }
    return state;
}

// export var apiReducer=(state=[],action)=>{
//     switch(action.type){
//         case 'GET_COURESES':{
//             return action.payload;
//         }break;
//         default: state;
//     }
//     return state;
// }