import React from 'react';
import { shallow } from 'enzyme';
import CommonHeader from '../../../components/common/CommonHeader';

describe('<CommonHeader>', () => {
  const props = {
    sidebarOpen: true
  };
  it('should render CommonHeader component', () => {
    const tree = shallow(<CommonHeader {...props} />);
    expect(tree).toMatchSnapshot();
  });
});