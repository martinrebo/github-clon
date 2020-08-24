import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { StateProvider } from '../../store/store'


describe('<Header> component', () => {
  it('should render correctly', () => {
    shallow(<StateProvider> <Header /> </StateProvider>)
  })
  it('should have an <header> tag', () => {
    const component = mount(<StateProvider> <Header /> </StateProvider>)
    expect(component.find('h1')).toHaveLength(1)
  });

});
