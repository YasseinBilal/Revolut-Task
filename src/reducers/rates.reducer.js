import exchanceConstants from '../constants/exchange.constants';

const initialState = {};

export function ratesReducer(state = initialState, action) {
  switch (action.type) {
    case exchanceConstants.GET_FX_RATE_SUCCESS:
      return { ...state, ...action.rates };

    default:
      return state;
  }
}
