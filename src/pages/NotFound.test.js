import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
Enzyme.configure({ adapter: new Adapter() })
    describe('Test Case For NotFound', () => {
    it('should render logo', () => {
        const wrapper = shallow(<NotFound />)
        const buttonElement = wrapper.find('#not-found');
        expect(buttonElement).toHaveLength(1);
    })
})
