import React from 'react';
// import { connect } from 'react-redux';
import ExpensiveForms from '../components/ExpenseForms';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpensiveForms />
      </div>
    );
  }
}

export default Wallet;
