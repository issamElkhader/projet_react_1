import React from "react";
import Transaction from "./Transaction";

export default function FormComponent(props) {
  return (
    <div className="form w-100 d-flex justify-content-center flex-column gap-2 align-items-center px-2">
      <h4 className="text-black text-center mt-3 fw-bold">Transaction</h4>
      <input
        type="text"
        className="form-control shadow-sm"
        placeholder="Salary , House ..."
        onChange={props.onchangeTitle}
      />
      <select
        className="form-select shadow-sm"
        onChange={props.onchangeCategorie}
      >
        <option value="Expense">Expense</option>
        <option value="Investement">Investment</option>
        <option value="Savings">Savings</option>
      </select>
      <input
        type="number"
        min={0}
        className="form-control shadow-sm"
        placeholder="Amount"
        onChange={props.onchangeAmount}
      />
      <button
        className="btn btn-primary w-100 rounded-3"
        onClick={props.onAddTransaction}
      >
        Make Transaction
      </button>
      <h4 className="text-black text-center mt-3 fw-bold">History</h4>
      {props.data.map((item) => (
        <Transaction
          key={item.id}
          idTransaction={item.id}
          title={item.title}
          amount={item.amount}
          categorie={item.categorie}
          onDeleteTransaction={props.onDeleteTransaction}
          showAddDetailsModal={props.showAddDetailsModal}
          ViewDetails={props.ViewDetails}
          onChangeId={props.onChangeId}
        />
      ))}
    </div>
  );
}
