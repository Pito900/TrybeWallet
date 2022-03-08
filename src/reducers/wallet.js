// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'EXPENSEADD':
    return { ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case 'CURRENCIES':
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
}

export default wallet;
