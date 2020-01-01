import { combineReducers } from 'redux';
import { balanceReducer } from './balance.reducer';
import { ratesReducer } from './rates.reducer';

const rootReducer = combineReducers({
  balance: balanceReducer,
  rates: ratesReducer
});

export default rootReducer;
