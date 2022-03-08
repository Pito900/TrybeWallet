// Coloque aqui suas actions
import { exchangeRatesFromAPI, currenciesFromAPI } from '../funcsAPI/Api';

export const userDataEmail = (email) => ({
  type: 'LOGIN',
  email,
});

export const expenseData = (expenses) => ({
  type: 'EXPENSEADD',
  expenses,
});

export const currenciesData = (currencies) => ({
  type: 'CURRENCIES',
  currencies,
});

export const expenseThunk = (expense) => async (dispatch) => {
  dispatch({ type: 'FETCH_API' });
  const exchangeRates = await exchangeRatesFromAPI(); // Estou esperando os dados q vem API e colocando na exchangeRates
  dispatch(expenseData({ ...expense, exchangeRates })); // Estou armazenando no expense as informações advindas da API
};

export const currenciesThunk = () => async (dispatch) => { // a mesma lógica do anterior só q usando as currencies
  dispatch({ type: 'FETCH_API' });
  const currencies = await currenciesFromAPI();
  dispatch(currenciesData(currencies));
};
