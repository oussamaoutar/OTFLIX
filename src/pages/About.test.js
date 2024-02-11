import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import About from './About'
Enzyme.configure({ adapter: new Adapter() })
    describe('Test Case For About', () => {
    it('should render title about', () => {
        const wrapper = shallow(<About />)
        const buttonElement = wrapper.find('#about-title');
        expect(buttonElement).toHaveLength(1);
    })
})
