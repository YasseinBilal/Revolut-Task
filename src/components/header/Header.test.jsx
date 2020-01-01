import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {};
  const enzymeWrapper = shallow(<Header {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Header', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('div').hasClass('header')).toBe(true);
      expect(enzymeWrapper.find('img').props().alt).toBe('Revolut');
    });
  });
});
