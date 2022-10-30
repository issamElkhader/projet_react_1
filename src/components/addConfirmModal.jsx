import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export default function AddConfirmModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title className="w-100 d-flex justify-content-center">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="display-6 text-danger"
          ></FontAwesomeIcon>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-100 text-center fw-bold">{props.msg}</Modal.Body>
      <Modal.Footer className="w-100 d-flex justify-content-center gap-3">
        <Button variant="success" onClick={props.onDeleteTransaction}>
          YES
        </Button>
        <Button variant="danger" onClick={props.handleClose}>
          NON
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
