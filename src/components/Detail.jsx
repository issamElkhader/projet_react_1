import React from "react";

export default function Detail(props) {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center ">
      <div className="fw-bold"> - {props.nameDetail}</div>
      <div>${props.amountSpending}</div>
    </div>
  );
}
