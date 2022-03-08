import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { currenciesThunk as fetchCurrencies, expenseThunk } from '../actions';

// importar a nosssa função currenciesThunk com dois nomes diferentes é essencial para lidarmos com o lint.
// se n fosse o lint fariamos mais fácilmente a parte de por as moedas no select

class ExpensiveForms extends React.Component {
    state = {
      value: 0,
      description: '',
      tag: '',
      method: '',
      currency: 'USD',
    };

    componentDidMount() {
      this.currenciesThunk(); // eu estava tentando só fazer this.props.currenciesThunk()...o lint n deixou.
    }

    handleChange = ({ target }) => {
      const { value, name } = target;
      this.setState({
        [name]: value,
      });
    }

    handleClick = () => {
      const { value, description, method, tag, currency } = this.state;
      const { expenseData, expenses } = this.props;
      expenseData({
        id: expenses.length, // aqui estou colocando o tamanho do vetor das despesas como sendo o id
        value,
        description,
        tag,
        method,
        currency,
      });
      this.setState({ // após clicar estou zendo tudo q foi colocado
        value: 0,
        description: '',
        tag: '',
        method: '',
        currency: 'USD',
      });
    }

    async currenciesThunk() { // criei essa função assincrona e dps chamo ela na didmount
      const { currenciesThunk } = this.props; // precisei fazer isso pq n estava sabendo arrumar o lint
      await currenciesThunk(); // sem parâmetro pq ká está no dispatch
    }

    render() {
      const { value, description, method, tag, currency } = this.state;
      const { currencies } = this.props;

      return (
        <div>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              type="text"
              value={ value }
              name="value"
              onChange={ this.handleChange }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              { currencies.map((moeda) => (
                <option
                  data-testid={ ` ${moeda} ` }
                  key={ moeda }
                >
                  { moeda }
                </option>))}
            </select>
          </label>
          {/* <select
            label="Moeda"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            { currencies.map((moeda) => (
              <option
                data-testid={ ` ${moeda} ` }
                key={ moeda }
              >
                { moeda }
              </option>))}
          </select> */}
          <label htmlFor="method">
            Método ded Pagamento
            <select
              id="method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
              data-testid="method-input"
            >
              { ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'].map((m) => (
                <option key={ m }>{m}</option>
              )) }
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa

          </button>

        </div>
      );
    }
}

ExpensiveForms.propTypes = {
  dispatch: Proptypes.func,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({ // só fazendo o dispatch das funções
  expenseData: (expense) => dispatch(expenseThunk(expense)), // aqui já coloquei o parâmetro
  currenciesThunk: (expense) => dispatch(fetchCurrencies(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensiveForms);
