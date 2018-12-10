import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../components/Home';

describe('<Home>', () => {
  const props = {
    loadCheatsAction: jest.fn(() => {})
  };
  const tree = shallow(<Home {...props} />);
  it('should render the Home component successfully', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should simulate componentDidMount', () => {
    const spy = jest.spyOn(tree.instance(), 'componentDidMount');
    tree.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('should simulate handleSearch', () => {
    const spy = jest.spyOn(tree.instance(), 'handleSearch');
    tree.instance().handleSearch({
      target: {
        name: ''
      }
    });
    expect(spy).toHaveBeenCalled();
  });
  it('should simulate onSetSidebarOpen', () => {
    const spy = jest.spyOn(tree.instance(), 'onSetSidebarOpen');
    tree.instance().onSetSidebarOpen();
    expect(spy).toHaveBeenCalled();
  });
});