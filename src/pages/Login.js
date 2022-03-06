import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { userDataEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };
  }

  handleChangeEmail = ({ target }) => {
    const { value } = target;
    this.setState({
      email: value,
    }, this.Validations);
  }

  handleChangeSenha = ({ target }) => {
    const { value } = target;
    this.setState({
      senha: value,
    }, this.Validations);
  }

  Validations = () => {
    // peguei do Stack Overflow (só procurar como validar email).
    const { email, senha } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailValido = regex.test(email);
    const senhaLenghMin = 6; // é necessário se n o lint te deixa doido
    if (senha.length >= senhaLenghMin && emailValido) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleClick = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(userDataEmail(email));
    history.push('/carteira'); // O rpofessor ensinou isso na ultima prática de redux (vi isso lá)
  }

  render() {
    const { email, senha, disabled } = this.state;
    return (
      <div>
        <input
          type="text"
          value={ email }
          name="email"
          data-testid="email-input"
          onChange={ this.handleChangeEmail }
        />
        <input
          type="text"
          name="password"
          data-testid="password-input"
          value={ senha }
          onChange={ this.handleChangeSenha }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: Proptypes,
}.isRequired;

export default connect()(Login);
