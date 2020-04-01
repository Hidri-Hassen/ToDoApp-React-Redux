import React, { Component } from 'react'
import {connect} from 'react-redux'

class Input extends Component {
state={}

    render() {
        return (
<div>

<input className="input" type="text" placeholder="....Add your List" onChange={(e)=>{this.props.handleChange(e.target)}} /> 
<button className="button" type="button" onClick={()=>{this.props.add(this.props.input) } } >Add</button>  
           
</div>

)
}
}


const mapDispatchToProps=(dispatch)=>{
    return{
        handleChange:(target)=>{
            dispatch({type:'SET_INPUT',value:target.value})
            
        },
        add:(input)=>{
            
            let obj={}
            let inputValue=input
            let id=Math.random()
            obj={inputValue,id}
            dispatch({type:'ADD_LIST',value:obj})
            
        },

    }
    
    }
    


    const mapStateToProps=(state)=>{
    return{
    input:state.input
    
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Input);