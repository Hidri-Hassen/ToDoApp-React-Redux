import React, { Component } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { editItem } from "../redux/actions.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

class EditTodo extends Component {
  state = {
    show: false,
    myinput: this.props.item.todo
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleChange = e => {
    this.setState({
      myinput: e.target.value
    });
  };

  edit = e => {
    this.props.editItem({ id: this.props.item.id, todo: this.state.myinput });
  };

  render() {
    return (
      <div>
          
              <FontAwesomeIcon className="faedit" onClick={this.handleShow} icon="edit" />
          

        <Modal className="add-modal"
          show={this.state.show}
          onHide={this.handleShow}
          animation={false}
        >
          <Modal.Header >
            <Modal.Title className="title">Edit items</Modal.Title>
          </Modal.Header>
          <FormControl className="form-control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.myinput}
            onChange={this.handleChange}
          />
          <FlipMove duration={300} easing="ease-in-out">
          <Modal.Footer>
            <Button className="btn" variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button className="btn"
              variant="primary"
              onClick={() => {
                this.edit();
                this.handleShow();
                
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
          </FlipMove>
        </Modal>
      </div>
    );
  }
}

const MapDispatchtoprops = {
  editItem
};

export default connect(null, MapDispatchtoprops)(EditTodo);
