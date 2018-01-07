export function addEvent(todoValue){
    return {type:'ADD_EVENT', payload:todoValue};
}

export function deleteEvent(itemKey){
    return {type:'DELETE_EVENT', payload:itemKey};
}