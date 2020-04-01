
const listReducer=(state=[],action)=> {
    if(action.type==='ADD_LIST'){
         return state=[...state,action.value]
         
    }

    if(action.type==='DELETE_LIST'){
        return state.filter(el=> el.id!==action.id)
    }

    if(action.type==='COMPLETE_LIST'){
        return state=[...state.map((el,id)=> id? {...el, done:!el.done}:el)]
    }
    
    if(action.type==='EDIT_LIST'){
        return state =[...state.map((el,id)=>id?{...el,el}:el)]
        
    }

    return state
    }
export default listReducer

   