import { ratesReducer } from './rates.reducer';
import exchangeConstants from '../constants/exchange.constants';

describe('rates reducer', () => {
  it('should return the initial state', () => {
    expect(ratesReducer(undefined, {})).toEqual({});
  });

  it('should return all rates on get rates success', () => {
    const rates = {
      USD: 1,
      EUR: 2,
      GBP: 3
    };
    expect(
      ratesReducer(
        { EUR: 1000 },
        {
          type: exchangeConstants.GET_FX_RATE_SUCCESS,
          rates
        }
      )
    ).toEqual(rates);
  });
});
