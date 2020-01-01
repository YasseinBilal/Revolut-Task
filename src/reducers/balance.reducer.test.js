import { balanceReducer } from './balance.reducer';
import exchangeConstants from '../constants/exchange.constants';

describe('balance reducer', () => {
  it('should return the initial state', () => {
    expect(balanceReducer(undefined, {})).toEqual({ EUR: 1000 });
  });

  it('should update balance bockets on update success', () => {
    expect(
      balanceReducer(
        { EUR: 1000 },
        {
          type: exchangeConstants.UPDATE_BALANCE_SUCCESS,
          data: {
            fromCurrency: 'EUR',
            toCurrency: 'USD',
            fromValue: 100,
            toValue: 200
          }
        }
      )
    ).toEqual({ EUR: 900, USD: 200 });
  });
});
