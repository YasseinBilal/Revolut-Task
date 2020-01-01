import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Exchange from './Exchange';

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    rates: { USD: 1, EUR: 2 },
    fromCurrency: 'EUR',
    toCurrency: 'USD',
    fromValue: 10,
    toValue: 20,
    balance: { EUR: 100 },
    handleCurrencyChange: jest.fn(),
    handleValueChange: jest.fn(),
    updateBalance: jest.fn(),
    balanceSufficiant: true,
    getFormatedBalance: jest.fn(),
    handleKeyDown: jest.fn(),
    swapCurrencies: jest.fn()
  };
  const enzymeWrapper = shallow(<Exchange {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Exchange Component', () => {
    it('should render correctly', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('h5.text-bold-500').text()).toBe(
        "Transfer from one wallet to another within seconds. It 's that simple."
      );
      expect(enzymeWrapper.find('button.exchange').text()).toBe('Exchange');
    });

    it('should call swapCurrencies on click of swap currencies icon', () => {
      const { enzymeWrapper, props } = setup();
      const swapIcon = enzymeWrapper.find('.swap-icon');
      swapIcon.simulate('click');
      expect(props.swapCurrencies.mock.calls.length).toEqual(1);
    });

    it('should call updateBalance if there is enough balance in selected fromCurrency', async () => {
      const { enzymeWrapper, props } = setup();
      const exchangeButton = enzymeWrapper.find('button.exchange');
      exchangeButton.simulate('click');
      expect(props.updateBalance.mock.calls.length).toEqual(1);
    });
  });
});
