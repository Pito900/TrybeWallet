import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends React.Component {
  GastoTotal = () => {
    const { expenses } = this.props;
    return expenses.reduce((acc, { exchangeRates, value, currency }) => {
      const calculandoCotacao = value * exchangeRates[currency].ask;
      return acc + calculandoCotacao;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <p data-testid="email-field">
            Login:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa Total R$:
            { this.GastoTotal() }
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

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses, // Aqui estou pegando o vetor de despesas como props
});

export default connect(mapStateToProps)(Header);
