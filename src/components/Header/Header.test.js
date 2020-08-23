import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";


describe('<Header> component', () => {
  it('should render correctly', () => {
    shallow(<Header />)
  })
  it('should have an <h1> tag', () => {
    const component = shallow(<Header />)
    expect(component.find('h1').html()).toContain('Github repo search')
  });

});
