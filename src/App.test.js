import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from '../utils';
import { italics } from 'prop-types/lib/ReactPropTypesSecret';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example Title',
                body: 'Some Text'
            },{
                title: 'Example Title 2',
                body: 'Some Text'
            },{
                title: 'Example Title 3',
                body: 'Some Text'
            },]
        }
        wrapper = setUp(initialState);
    })

    it('Should render without errors', () => {
        const component = findByTestAttribute(wrapper, 'appComponent');
        // console.log(wrapper.debug());
        // console.log(component.debug());
        expect(component.length).toBe(1);
    })
});