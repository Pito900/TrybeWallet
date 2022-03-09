import React from 'react';
// import { connect } from 'react-redux';
import ExpensiveForms from '../components/ExpenseForms';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpensiveForms />
        <Table />
      </div>
    );
  }
}

export default Wallet;
