import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../../utils';
import ListItem from './index';

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text'
            };
            const propError = checkProps(ListItem, expectedProps);
            expect(propError).toBeUndefined();
        })
    })

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />);
        })

        it('Should render withour error', () => {
            const component = findByTestAttribute(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a title', () => {
            const title = findByTestAttribute(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })

        it('Should render a description', () => {
            const desc = findByTestAttribute(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })
    })
    
    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />);
        })
        it('Component is not rendered', () => {
            const component = findByTestAttribute(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })
    })
})