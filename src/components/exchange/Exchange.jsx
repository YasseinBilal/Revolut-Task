/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import toastr from 'toastr';
import { currencySymbols } from '../../helpers';

function Exchange({
  rates,
  fromCurrency,
  toCurrency,
  fromValue,
  toValue,
  balance,
  handleCurrencyChange,
  handleValueChange,
  updateBalance,
  balanceSufficiant,
  getFormatedBalance,
  handleKeyDown,
  swapCurrencies
}) {
  async function onExchangeClick() {
    try {
      await updateBalance({
        fromCurrency,
        toCurrency,
        fromValue: parseFloat(fromValue),
        toValue: parseFloat(toValue)
      });
      toastr.success('Currency exchanged Successfully');
    } catch (e) {
      toastr.success('Error in exchanging Currency');
    }
  }

  return (
    <div className="row exchage-component">
      <div className="col-md-12 col-sm-12">
        <div className="card text-center">
          <div className="card-subtitle p-0 mx-2">
            <br />
            <h5 className="text-bold-500">
              Transfer from one wallet to another within seconds. It &apos;s
              that simple.
            </h5>
          </div>
          <div className="card-body mt-2">
            <div className="form-group form-inline d-flex justify-content-center">
              <form className="exchange-form">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                    id="from-currency"
                    value={(fromValue ? '-' : '') + fromValue}
                    onChange={e =>
                      handleValueChange(e.target.value.replace('-', ''), true)
                    }
                    onKeyDown={e => handleKeyDown(e, true)}
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-info btn-lighten-2 dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {fromCurrency}
                    </button>
                    <div className="dropdown-menu" x-placement="bottom-start">
                      {Object.keys(rates).map((currency, i) => (
                        <a
                          className="dropdown-item"
                          href="#"
                          key={i}
                          onClick={() => handleCurrencyChange(currency, true)}
                        >
                          {currency}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`currency-balance ${
                      !balanceSufficiant && !!fromValue ? 'error-balance' : ''
                    }`}
                    onClick={() =>
                      handleValueChange(balance[fromCurrency], true)
                    }
                  >
                    Balance:
                    {getFormatedBalance(balance, fromCurrency, currencySymbols)}
                  </div>
                </div>
                <div className=" seperator input-group row">
                  <div className="col col-md-6 text-left">
                    <a onClick={swapCurrencies} className="swap-icon">
                      <img src="switch-solid.svg" width="20" alt="switch" />
                    </a>
                  </div>
                  <div className="col col-md-6 currency-ratio-container text-right">
                    <img src="arrow-icon.svg" width="30" alt="switch" />
                    <span className="currency-ratio">
                      {`${currencySymbols[fromCurrency]}1 = ${
                        currencySymbols[toCurrency]
                      }${(rates[fromCurrency] / rates[toCurrency]).toFixed(4)}`}
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                    id="to-currency"
                    value={(toValue ? '+' : '') + toValue}
                    onChange={e =>
                      handleValueChange(e.target.value.replace('+', ''), false)
                    }
                    onKeyDown={e => handleKeyDown(e, false)}
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-info btn-lighten-2 dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {toCurrency}
                    </button>
                    <div className="dropdown-menu" x-placement="bottom-start">
                      {Object.keys(rates).map((currency, i) => (
                        <a
                          className="dropdown-item"
                          key={i}
                          href="#"
                          onClick={() => handleCurrencyChange(currency, false)}
                        >
                          {currency}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div
                    className="currency-balance"
                    onClick={() =>
                      handleValueChange(balance[toCurrency], false)
                    }
                  >
                    Balance:
                    {getFormatedBalance(balance, toCurrency, currencySymbols)}
                  </div>
                </div>
              </form>
            </div>
            <button
              type="button"
              className="btn btn-danger exchange my-2"
              disabled={!balanceSufficiant}
              onClick={onExchangeClick}
            >
              <span className="font-medium-1">Exchange</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
