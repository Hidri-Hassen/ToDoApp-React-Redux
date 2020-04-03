import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions.js";

class AddTodo extends Component {
  state = {
    userInput: ""
  };
  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };
  addTodo = e => {
    e.preventDefault();
    this.props.addItem({
      id: Math.random(),
      todo: this.state.userInput,
    });
    this.setState({
      userInput: ""
    });
  };
  render() {
    return (
   

        <div>

<input className="input" value={this.state.userInput} type="text" placeholder="....Add your List" onChange={this.handleChange} /> 
<button className="button" type="button" onClick={this.addTodo} >Add</button>  
           
</div>
      
    );
  }
}

const mapDispatchToProps = {
  addItem
};
export default connect(null, mapDispatchToProps)(AddTodo);
