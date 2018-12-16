import React from 'react';
import { shallow } from 'enzyme';
import AuthHeader from '../../../components/common/AuthHeader';

describe('<AuthHeader>', () => {
  const props = {
    logout: jest.fn(() => {}),
    sidebarOpen: true
  };
  it('should render the AuthHeader component', () => {
    const tree = shallow(<AuthHeader {...props} />);
    expect(tree).toMatchSnapshot();
  });
});