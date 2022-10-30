import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChartComponent from "./components/Chart.jsx";
import FormComponent from "./components/Form.jsx";
import AddErrorModal from "./components/AddErrorModal.jsx";
import AddDetails from "./components/AddDetails.jsx";
import ViewDetails from "./components/ViewDetails.jsx";
import AddConfirmModal from "./components/addConfirmModal";

let plusId = 0;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TransactionInfo: [],
      title: "",
      amount: 0,
      categorie: "Expense",
      id: 0,
      showErrorModal: false,
      showConfirmModal: false,
      msg: "",
      DetailsInfo: [],
      showAddDetailsModal: false,
      showDetails: false,
      nameDetails: "",
      amountDetails: 0,
      idDetail: 0,
    };
  }

  onchangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onchangeAmount = (e) => {
    this.setState({ amount: e.target.value });
  };
  onchangeCategorie = (e) => {
    this.setState({ categorie: e.target.value });
  };

  onAddTransaction = () => {
    this.state.title === ""
      ? this.setState({
          showErrorModal: true,
          msg: "The transaction Cannot be empty !!",
        })
      : this.state.amount === 0 || this.state.amount === ""
      ? this.setState({
          showErrorModal: true,
          msg: "make you sure you have enter the amount",
        })
      : this.setState({
          TransactionInfo: [
            ...this.state.TransactionInfo,
            {
              id: Number((plusId += 1)),
              title: this.state.title,
              amount: this.state.amount,
              categorie: this.state.categorie,
            },
          ],
        });
  };
  onChangeId = (e) => {
    this.setState({ id: Number(e.target.value) });
    this.setState({ showConfirmModal: true, msg: "Are you sure !" });
  };
  onDeleteTransaction = (e) => {
    this.setState({ showConfirmModal: false });
    let res = this.state.TransactionInfo.filter((item) => {
      return item.id !== this.state.id;
    });
    this.setState({ TransactionInfo: res });
  };
  onChangeNameDetails = (e) => {
    this.setState({ nameDetails: e.target.value });
  };
  onChangeAmountDetails = (e) => {
    this.setState({ amountDetails: e.target.value });
  };
  showAddDetailsModal = () => {
    this.setState({ showAddDetailsModal: true });
  };
  AddDetailsModal = () => {
    this.setState({
      DetailsInfo: [
        ...this.state.DetailsInfo,
        {
          id: Number((this.state.idDetail += 1)),
          nameDetail: this.state.nameDetails,
          amountSpending: this.state.amountDetails,
        },
      ],
    });
    this.setState({ showAddDetailsModal: false });
  };
  ViewDetails = () => {
    this.setState({ showDetails: true });
  };
  render() {
    return (
      <div className="container m-5">
        <AddErrorModal
          show={this.state.showErrorModal}
          handleClose={() => {
            this.setState({ showErrorModal: false });
          }}
          msg={this.state.msg}
        />
        <AddConfirmModal
          show={this.state.showConfirmModal}
          onDeleteTransaction={this.onDeleteTransaction}
          handleClose={() => {
            this.setState({ showConfirmModal: false });
          }}
          msg={this.state.msg}
        />
        <AddDetails
          show={this.state.showAddDetailsModal}
          onChangeNameDetails={this.onChangeNameDetails}
          onChangeAmountDetails={this.onChangeAmountDetails}
          AddDetailsModal={this.AddDetailsModal}
          handleClose={() => {
            this.setState({ showAddDetailsModal: false });
          }}
        />
        <ViewDetails
          show={this.state.showDetails}
          dataDetails={this.state.DetailsInfo}
          handleClose={() => {
            this.setState({ showDetails: false });
          }}
        />
        <div className="row">
          <div className="col ">
            <h1 className="h1 text-center px-5 py-2  bg-dark text-white rounded">
              Budget APP
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col p-5 m-xxl-5">
            <ChartComponent TransactionInfo={this.state.TransactionInfo} />
          </div>
          <div className="col">
            <FormComponent
              data={this.state.TransactionInfo}
              onchangeTitle={this.onchangeTitle}
              onchangeAmount={this.onchangeAmount}
              onchangeCategorie={this.onchangeCategorie}
              onAddTransaction={this.onAddTransaction}
              onDeleteTransaction={this.onDeleteTransaction}
              showAddDetailsModal={this.showAddDetailsModal}
              ViewDetails={this.ViewDetails}
              onChangeId={this.onChangeId}
            />
          </div>
        </div>
      </div>
    );
  }
}
