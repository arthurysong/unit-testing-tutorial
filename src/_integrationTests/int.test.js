import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from '../actions'

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install(); // whenever we hit axios
    })

    afterEach(() => {
        moxios.uninstall();
    });

    it('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Example Title 1',
            body: 'Some text'
        },
        {
            title: 'Example Title 2',
            body: 'Some text'
        },
        {
            title: 'Example Title 3',
            body: 'Some text'
        }]

        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
    })
})