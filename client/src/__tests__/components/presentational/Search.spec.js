import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../../components/common/Search';

describe('<Search>', () => {
  const props = {
    handleSearch: jest.fn(() => {})
  };
  it('should render the Search', () => {
    const tree = shallow(<Search {...props} />);
    expect(tree).toMatchSnapshot();
  });
});