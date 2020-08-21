import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/reducers';
import { middlewares } from '../src/createStore'

export const findByTestAttribute = (component, attr) => {
    return component.find(`[data-test='${attr}']`)
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr
}

export const testStore = () => {
    const createStoreWithMiddlware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlware(rootReducer);
}