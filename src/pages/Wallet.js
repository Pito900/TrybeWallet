import React from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class Wallet extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Wallet;
