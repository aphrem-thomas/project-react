export function thereducer(state=[{todoList:"",id:0}], action){
    switch(action.type){
        case 'ADD_EVENT':{
            let i=state.length;
            let id1=state[i-1].id
            //console.log('length='+i+' id='+id1);
            let id2=id1+1;
            let job={todoList:action.payload,id:id2};
            state=[...state, job];
            //state.map(item=>{console.log(item.todoList)})
        }
        break;
        case 'DELETE_EVENT':{
            let newState=state.filter((item)=>{return(item.id!=action.payload);});
            state=newState;
        }
            break;
    }
    return state;
}