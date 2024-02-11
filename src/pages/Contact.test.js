import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Contact from './Contact'
Enzyme.configure({ adapter: new Adapter() })
    describe('Test Case For Contact', () => {
    it('should render button', () => {
        const wrapper = shallow(<Contact />)
        const buttonElement = wrapper.find('#Submit');
        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.text()).toEqual('Submit');
    }),
    it('should render textarea', () => {
        const wrapper = shallow(<Contact />)
        const buttonElement = wrapper.find('#textarea');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render password', () => {
        const wrapper = shallow(<Contact />)
        const buttonElement = wrapper.find('#password');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render nom', () => {
        const wrapper = shallow(<Contact />)
        const buttonElement = wrapper.find('#nom');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render prenom', () => {
        const wrapper = shallow(<Contact />)
        const buttonElement = wrapper.find('#prenom');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render textarea', () => {
        const wrapper = shallow(<Contact />)
        const buttonElement = wrapper.find('#textarea');
        expect(buttonElement).toHaveLength(1);
    }),
    it('should render textarea', () => {
        const wrapper = shallow(<Contact />)
        const buttonElement = wrapper.find('#textarea');
        expect(buttonElement).toHaveLength(1);
    })
})
