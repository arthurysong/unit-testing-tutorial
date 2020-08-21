import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttribute } from '../../../utils/index'

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component; // creating Header component
};

describe('Header Component', () => {
    let component;
    beforeEach(() => { // ran before every single test
        component = setUp();
    })

    it('It should render without errors', () => {
        // const wrapper = component.find('.headerComponent');
        const wrapper = findByTestAttribute(component, 'headerComponent');
        // we should use data-test because classNames are changed often..
        expect(wrapper.length).toBe(1);
    })

    it('Should render a logo', () => {
        // const logo = component.find('.logoIMG');
        const logo = findByTestAttribute(component, 'logoIMG')
        expect(logo.length).toBe(1);
    })
})