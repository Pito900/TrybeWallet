import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends React.Component {
    state = {
      expense: 0,
    }

    render() {
      const { email } = this.props;
      const { expense } = this.state;
      console.log(email);
      return (
        <header>
          <div>
            <p data-testid="email-field">
              Login:
              { email }
            </p>
            <p data-testid="total-field">
              expense $
              { expense }
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
      );
    }
}

Header.propTypes = {
  email: Proptypes.string,
}.isRequired;

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps)(Header);
