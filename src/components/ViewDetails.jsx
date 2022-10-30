import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Detail from "./Detail";

export default function ViewDetails(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Details :</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.dataDetails.map((item) => (
          <Detail
            key={item.id}
            nameDetail={item.nameDetail}
            amountSpending={item.amountSpending}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
