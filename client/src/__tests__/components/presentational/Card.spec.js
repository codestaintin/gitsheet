import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../components/common/Card';

describe('<Card>', () => {
  const props = {
    name: '',
    gitCheats: []
  };
  it('should render the Card component', () => {
    const tree = shallow(<Card {...props} />);
    expect(tree).toMatchSnapshot();
  });
});