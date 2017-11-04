import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import HomePage from './pages/home';
import rootReducer from './reducers';

// eslint-disable-next-line 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));

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
        <HomePage title="good 1" />
    </Provider>,
    document.getElementById('app')
);
