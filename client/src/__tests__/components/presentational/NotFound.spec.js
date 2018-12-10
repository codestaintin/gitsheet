import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import NotFound from '../../../components/common/NotFound';

describe('<NotFound>', () => {
  let shallowComponent;
  beforeEach(() => {
    shallowComponent = shallow(<NotFound />);
  });

  it('should render the NotFound component', () => {
    const tree = toJson(shallowComponent);
    expect(tree).toMatchSnapshot();
  });
});
