import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from '../../components/auth/SignIn';

describe('<SignIn>', () => {
  const props = {
    signIn: jest.fn(() => {}),
    history: {
      push: jest.fn(() => {})
    }
  };
  const tree = shallow(<SignIn {...props} />);
  it('should render SignIn component successfully', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should simulate componentDidMount', () => {
    const spy = jest.spyOn(tree.instance(), 'componentDidMount');
    tree.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('should simulate handleSubmit', () => {
    const spy = jest.spyOn(tree.instance(), 'handleSubmit');
    tree.instance().handleSubmit({
      preventDefault: jest.fn()
    });
    expect(spy).toHaveBeenCalled();
  });
  it('should simulate handleChange', () => {
    const spy = jest.spyOn(tree.instance(), 'handleChange');
    tree.instance().handleChange({
      target: {
        name: ''
      }
    });
    expect(spy).toHaveBeenCalled();
  });
});