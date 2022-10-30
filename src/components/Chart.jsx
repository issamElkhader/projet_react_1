import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

export default function ChartComponent(props) {
  const config = {
    data: {
      datasets: [
        {
          label: "My First Dataset",
          data: [
            props.TransactionInfo.length > 0 ? percentageOfInvestement() : 100,
            props.TransactionInfo.length > 0 ? percentageOfExpense() : 100,
            props.TransactionInfo.length > 0 ? percentageOfSavings() : 100,
          ],
          backgroundColor: ["#FCBE44", "#C43095", "#1F3B5C"],
          hoverOffset: 3,
          borderRadius: 30,
          spacing: 10,
          cutout: 115,
        },
      ],
    },
  };
  function calcTotalAmount() {
    let res = 0;
    props.TransactionInfo.map((item) => {
      res += Number(item.amount);
    });
    return res;
  }
  function percentageOfExpense() {
    let res =
      (props.TransactionInfo.filter((item) => {
        return item.categorie.toLowerCase() === "expense";
      }).length /
        props.TransactionInfo.length) *
      100;
    return res.toFixed(2);
  }
  function percentageOfSavings() {
    let res =
      (props.TransactionInfo.filter((item) => {
        return item.categorie.toLowerCase() === "savings";
      }).length /
        props.TransactionInfo.length) *
      100;
    return res.toFixed(2);
  }
  function percentageOfInvestement() {
    let res =
      (props.TransactionInfo.filter((item) => {
        return item.categorie.toLowerCase() === "investement";
      }).length /
        props.TransactionInfo.length) *
      100;
    return res.toFixed(2);
  }
  return (
    <div className=" d-flex justify-content-center flex-column align-items-center max-w-75 mx-auto">
      <div className="item position-relative" style={{ width: 280 }}>
        <Doughnut {...config}></Doughnut>
        <div
          className="position-absolute  mx-4 mt-1 d-flex flex-column justify-content-between align-items-center"
          style={{ left: "28%", fontWeight: "bold", top: "43%" }}
        >
          <h4 style={{ textTransform: "uppercase" }}>total </h4>
          <span style={{ color: "rgb(7 215 145", fontWeight: "bold" }}>
            ${calcTotalAmount()}
          </span>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-between gap-1 mt-4 w-50">
        <div className="d-flex justify-content-between">
          <p
            className=" ps-1 text-muted"
            style={{ borderLeft: "4px solid #FCBE44" }}
          >
            Investement{" "}
          </p>
          <span style={{ fontWeight: "bold" }}>
            {props.TransactionInfo.length > 0 ? percentageOfInvestement() : 0}%
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p
            className=" ps-1 text-muted"
            style={{ borderLeft: "4px solid #C43095" }}
          >
            Expense{" "}
          </p>
          <span style={{ fontWeight: "bold" }}>
            {props.TransactionInfo.length > 0 ? percentageOfExpense() : 0}%
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p
            className=" ps-1 text-muted"
            style={{ borderLeft: "4px solid #1F3B5C" }}
          >
            Savings{" "}
          </p>
          <span style={{ fontWeight: "bold" }}>
            {props.TransactionInfo.length > 0 ? percentageOfSavings() : 0}%
          </span>
        </div>
      </div>
    </div>
  );
}
