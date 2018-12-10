import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/common/Header';

describe('<Header>', () => {
  const props = {
    logOut: jest.fn(() => {}),
    signIn: {},
    sidebarOpen: true
  };
  const tree = shallow(<Header {...props} />);

  it('should render the Header component', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should simulate logoutUser', () => {
    const spy = jest.spyOn(tree.instance(), 'logoutUser');
    tree.instance().logoutUser();
    expect(spy).toHaveBeenCalled();
  });
});