import exchanceConstants from '../constants/exchange.constants';

// setting the initial balance so we can do some exchanges
const initialState = { EUR: 1000 };

export function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case exchanceConstants.UPDATE_BALANCE_SUCCESS:
      const { fromCurrency, toCurrency, fromValue, toValue } = action.data;
      return {
        ...state,
        [fromCurrency]: state[fromCurrency]
          ? state[fromCurrency] - fromValue
          : fromValue,
        [toCurrency]: state[toCurrency] ? state[toCurrency] + toValue : toValue
      };

    default:
      return state;
  }
}
