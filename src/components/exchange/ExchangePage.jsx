/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { exchangeActions } from '../../actions/exchange.actions';
import { formatNumber } from '../../helpers';
import './ExchangePage.scss';
import Exchange from './Exchange';

function ExchangePage({ getRates, updateBalance, rates, balance }) {
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    // let ratesInterval = null;
    // ratesInterval = setInterval(getRates, 10000);
    getRates();
    return () => {
      // clearInterval(ratesInterval);
    };
  }, [getRates]);

  const exchangeProps = {
    rates,
    fromCurrency,
    toCurrency,
    fromValue,
    toValue,
    handleCurrencyChange,
    handleValueChange,
    updateBalance,
    balanceSufficiant: isBalanceSufficiant(),
    getFormatedBalance,
    handleKeyDown,
    swapCurrencies,
    balance
  };

  function handleCurrencyChange(currency, isFrom) {
    if (
      (isFrom && currency === toCurrency) ||
      (!isFrom && currency === fromCurrency)
    ) {
      swapCurrencies();
    } else if (isFrom) {
      setFromCurrency(currency);
      setToValue(formatNumber((toValue * rates[currency]) / rates[toCurrency]));
    } else {
      setToCurrency(currency);
      setFromValue(
        formatNumber((toValue * rates[currency]) / rates[fromCurrency])
      );
    }
  }

  function handleValueChange(value = 0, isFromCurrency) {
    if (isFromCurrency) {
      setFromValue(value);
      setToValue(
        formatNumber((value * rates[fromCurrency]) / rates[toCurrency])
      );
    } else {
      setToValue(value);
      setFromValue(
        formatNumber((value * rates[toCurrency]) / rates[fromCurrency])
      );
    }
  }

  function isBalanceSufficiant() {
    if (!fromValue) return false;
    return parseFloat(balance[fromCurrency]) >= parseFloat(fromValue);
  }

  function handleKeyDown(e, isFromCurrency) {
    // allaw backspace and left and right arrows
    const allawedKeyCodes = [8, 37, 39];
    if (allawedKeyCodes.includes(e.keyCode)) return;

    const userInput = isFromCurrency ? fromValue + e.key : toValue + e.key;

    // prevent characters that doesn't match specified Money regluar exppression
    const regex = RegExp(/^([0-9]+(\.)?(\d{1,2})?$)/gm);
    if (!regex.test(userInput)) {
      e.preventDefault();
    }
  }

  function swapCurrencies() {
    const fromCur = fromCurrency;
    const fromVal = fromValue;
    setFromCurrency(toCurrency);
    setFromValue(toValue);
    setToCurrency(fromCur);
    setToValue(fromVal);
  }

  function getFormatedBalance(balance, currency, symbols) {
    return ` ${symbols[currency]}${
      parseFloat(balance[currency])
        ? parseFloat(balance[currency]).toFixed(2)
        : 0
    }`;
  }

  return (
    <div className="customers-page">
      <Exchange {...exchangeProps} />
    </div>
  );
}

function mapStatToProps(state) {
  const { rates, balance } = state;
  return { rates, balance };
}

const actionCreators = {
  getRates: exchangeActions.getLatest,
  updateBalance: exchangeActions.updateBalance
};

export default connect(mapStatToProps, actionCreators)(ExchangePage);
