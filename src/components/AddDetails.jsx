import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function AddDetails(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>New Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={props.onChangeNameDetails}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Amount Spending</label>
          <input
            type="number"
            min={0}
            className="form-control"
            onChange={props.onChangeAmountDetails}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={props.AddDetailsModal}>
          Add Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
