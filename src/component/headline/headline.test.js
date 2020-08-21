import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttribute } from '../../../utils/index';

const setUp = (props={}) => {
    return shallow(<Headline {...props} />)
}

describe('Headline Component', () => {

    describe('Have props', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        })

        it('Should render without errors', () => {
            const component = findByTestAttribute(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a H1', () => {
            const h1 = findByTestAttribute(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('Should render a desc', () => {
            const desc = findByTestAttribute(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should not render', () => {
            const component = findByTestAttribute(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });

});