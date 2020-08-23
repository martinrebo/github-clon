import React from 'react';
import Searchbar from './Searchbar'
import { shallow, mount } from 'enzyme'
import { StateProvider } from '../../store/store'


describe('<SearchBar /> component', () => {
    it('renders without crashing', () => {
        shallow(<StateProvider> <Searchbar /> </StateProvider>)

    })

    it('should have an <input> tag', () => {
        const component = shallow(<Searchbar />)
        expect(component.find('input')).toHaveLength(1)
    })

    it('Should call onChange handler on input', () => {

        const event = {
            target: { value: "new Value" }
        }
        const component = mount(<StateProvider> <Searchbar /> </StateProvider>)
        const input = component.find('input');
        input.simulate('change', event);
        expect(input.instance().value).toEqual("new Value");

    })

})