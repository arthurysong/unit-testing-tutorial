import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttribute, checkProps } from '../../../utils/index';

const setUp = (props={}) => {
    return shallow(<Headline {...props} />)
}

describe('Headline Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            // if there is an error with proptypes it will throw a warning
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps);
            // const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);
            expect(propsErr).toBeUndefined(); // if checkPropTypes was successful propsErr will be undefined.
            // otherwise it will contain errors.
        })
    })

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