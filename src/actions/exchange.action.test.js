import nock from 'nock';
import { exchangeActions } from './exchange.actions';
import exchangeConstants from '../constants/exchange.constants';
import config from '../services/config';

describe('Exchange Actions', () => {
  it('should create success action after fetching FX rates', async () => {
    nock(config.baseUrl)
      .get(
        `/latest.json?app_id=${config.APP_ID}&symbols=${config.defaultSymbols}`
      )
      .reply(
        200,
        { rates: { USD: 1, EUR: 0.9 } },
        {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        }
      );
    const dispatchMock = jest.fn();
    await exchangeActions.getLatest()(dispatchMock);
    expect(dispatchMock).toBeCalledWith({
      type: exchangeConstants.GET_FX_RATE_SUCCESS,
      rates: { USD: 1, EUR: 0.9 }
    });
  });

  it('should create an update balance action', () => {
    const data = {
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      fromValue: 10,
      toValue: 10
    };
    const expectedAction = {
      type: exchangeConstants.UPDATE_BALANCE_SUCCESS,
      data
    };
    expect(exchangeActions.updateBalance(data)).toEqual(expectedAction);
  });
});
