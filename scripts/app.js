import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import ImageList from 'containers/image';
import Search from 'containers/search';
import rootReducer from './reducer';
import Async from 'lib/middlewares/asyc';

// Create the store with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    createLogger(),
    Async
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

/*eslint-disable*/
// Make reducers hot reloadable, see http://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
if (module.hot) {
    module.hot.accept('./reducer', () => {
        const nextRootReducer = require('./reducer').default;
        store.replaceReducer(nextRootReducer);
    })
    ;
}
/*eslint-enable*/

render(
    <Provider store={store}>
        <div>
            <Search />
            <ImageList />
        </div>
    </Provider>,
    document.getElementById('app')
);
