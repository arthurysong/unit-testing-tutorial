import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from '../utils';

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
        expect(component.length).toBe(1);
    })
    
    it('exampleMethod should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it('exampleMethod2 should return number plus one', () => {
        const classInstance = wrapper.instance();
        expect(classInstance.exampleMethod2(1)).toBe(2)
    })
});