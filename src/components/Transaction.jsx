import React from "react";
import { Card, Stack, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Transaction(props) {
  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2 fs-5 fw-bold">
            {props.title}
            <span className="text-muted fs-6 ms-1 fw-normal">
              {" "}
              / ${props.amount}
            </span>
          </div>

          <div className=" position-absolute top-0 end-0">
            <span>
              <Button
                className="border-0 bg-white fs-5"
                onMouseEnter={props.onChangeId}
                value={props.idTransaction}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger"
                ></FontAwesomeIcon>
              </Button>
            </span>
          </div>
        </Card.Title>
        <Stack className="mt-4 " direction="horizontal" gap="1">
          <Button variant="outline-primary" onClick={props.showAddDetailsModal}>
            Add Details
          </Button>
          <Button variant="outline-secondary" onClick={props.ViewDetails}>
            View Details
          </Button>
        </Stack>
      </Card.Body>
      <Card.Footer
        style={{ backgroundColor: getStyle(props.categorie) }}
      ></Card.Footer>
    </Card>
  );
}
function getStyle(categorie) {
  switch (categorie) {
    case "Expense":
      return "#C43095";
    case "Investement":
      return "#FCBE44";
    case "Savings":
      return " #1F3B5C";
    default:
      return "black";
  }
}
