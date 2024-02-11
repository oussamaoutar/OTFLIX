import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'
Enzyme.configure({ adapter: new Adapter() })
    describe('Test Case For Footer', () => {
    it('should render footer content', () => {
        const wrapper = shallow(<Footer />)
        const buttonElement = wrapper.find('#footer');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render div 2', () => {
        const wrapper = shallow(<Footer />)
        const buttonElement = wrapper.find('#div2');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render footer content', () => {
        const wrapper = shallow(<Footer />)
        const buttonElement = wrapper.find('#footer');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render div 2', () => {
        const wrapper = shallow(<Footer />)
        const buttonElement = wrapper.find('#div2');
        expect(buttonElement).toHaveLength(1);
    })
})
