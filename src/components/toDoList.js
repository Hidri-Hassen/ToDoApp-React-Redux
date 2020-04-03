import React from 'react'
import {connect} from "react-redux"
import {deleteItem,completeItem} from "../redux/actions.js"
import EditTodo from "./editToDo.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

 function TodoList(props) {
    return (
        <div>
            {props.list.map((el,i)=>
            

<p className="list" key={i}>
<FlipMove duration={300} easing="ease-in-out">
              <FontAwesomeIcon className="faicons" onClick={()=>props.deleteItem(i)} icon="trash" />
              
              <EditTodo item={el}/>
 </FlipMove>
 <input className={el.done? "line-through" : "not-line-through"} type="text" onChange={(e)=>{this.props.handleChange(e.target)}} value={el.todo} />
             
 <button  className="button" onClick={()=>props.completeItem(i)} >{el.done? "undo" : "complete"}</button>
 
           
</p>
                )}
        </div>
    )
    
    
}
const mapStateToProps = state=>{
    return{
        list:state
    };
};
const mapDispatchToProps = {
    
    deleteItem,
    completeItem,
  
    
};
export default connect(mapStateToProps, mapDispatchToProps) (TodoList)