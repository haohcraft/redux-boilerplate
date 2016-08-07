import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import HomePage from './pages/home';
import rootReducer from './reducers';
require('../assets/css/normalizer.css');
// Create the store with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(thunk, createLogger())(createStore);
const store = createStoreWithMiddleware(rootReducer);
window.store = store;
/*eslint-disable*/
// Make reducers hot reloadable, see http://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    })
    ;
}
/*eslint-enable*/

render(
    <Provider store={store}>
        <HomePage title="good" />
    </Provider>,
    document.getElementById('app')
);
