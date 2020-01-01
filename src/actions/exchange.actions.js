import exchangeConstants from '../constants/exchange.constants';
import { exchangeService } from '../services/exchange.service';

export const exchangeActions = {
  getLatest,
  updateBalance
};

function getLatest() {
  return dispatch => {
    dispatch(request);
    return exchangeService.getLatest().then(
      exchangeRates => dispatch(success({ exchangeRates })),
      err => dispatch(error(err.toString()))
    );
  };

  function request() {
    return { type: exchangeConstants.GET_FX_RATE_REQUEST };
  }

  function success({ exchangeRates }) {
    return {
      type: exchangeConstants.GET_FX_RATE_SUCCESS,
      rates: exchangeRates.rates
    };
  }

  function error(err) {
    return { type: exchangeConstants.error, err };
  }
}

function updateBalance({ fromCurrency, toCurrency, fromValue, toValue }) {
  return {
    type: exchangeConstants.UPDATE_BALANCE_SUCCESS,
    data: { fromCurrency, toCurrency, fromValue, toValue }
  };
}
