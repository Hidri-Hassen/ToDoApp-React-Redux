import React, { Component } from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

class List extends Component {
    state={}

    render() {
        return (
<div>
<FlipMove duration={300} easing="ease-in-out">
    {
 this.props.list.map((el,id)=>(
    <div key={id}>
           
               
      <p className="list" >
      <FlipMove duration={300} easing="ease-in-out">
                    <FontAwesomeIcon className="faicons" onClick={()=>{this.props.handleDelete(el,id)}
                     } icon="trash" />
                     <FontAwesomeIcon className="faedit" onClick={()=>{this.props.edit(this.props.list) } }
                      icon="edit" />
                  </FlipMove>
       <input className={el.done? "line-through" : "not-line-through"} type="text" onChange={(e)=>{this.props.handleChange(e.target)}} value={el.inputValue} />
                   
       <button  className="button" onClick={()=>{this.props.handleComplete(el,id)}} >{el.done? "undo" : "complete"}</button>
                 
      </p>
      
      
    </div>
      ))               
                  
              }
 </FlipMove>
</div>

)
}

}

const mapStateToProps=(state)=>{
    return{
    list:state.list,
    

    
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleDelete:(id)=>{
            dispatch({type:'DELETE_LIST',id:id})
        },

        handleComplete:(id)=>{

            dispatch({type:'COMPLETE_LIST',id:id})
        },

        handleChange:(target)=>{
            dispatch({type:'EDIT_LIST',value:target.value})
        }, 
        edit:(list)=>{
            let inputValue=list
            // let obj={}
            
            // let id=Math.floor(Math.random())
            // obj={inputValue,id}
            dispatch({type:'EDIT_LIST',value:inputValue})
        }
    
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);