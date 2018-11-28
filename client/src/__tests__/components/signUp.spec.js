import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../../components/auth/SignUp';

describe('<SignUp>', () => {
  const props = {
    signUp: jest.fn(() => {}),
    history: {
      push: jest.fn(() => {})
    }
  };
  const tree = shallow(<SignUp {...props} />);
  it('should render SignUp component successfully', () => {
    expect(tree).toMatchSnapshot();
  });
  // TODO: Write more test suites when component is stable
});