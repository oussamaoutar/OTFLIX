import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({ adapter: new Adapter() })
    describe('Test Case For Header', () => {
    it('should render logo', () => {
        const wrapper = shallow(<Header />)
        const buttonElement = wrapper.find('#logo');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render nav', () => {
        const wrapper = shallow(<Header />)
        const buttonElement = wrapper.find('#nav');
        expect(buttonElement).toHaveLength(1);
    })
})
