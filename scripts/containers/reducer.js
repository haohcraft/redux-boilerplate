import { combineReducers } from 'redux';
import { ActionTypes } from './actions';
import { createAPIReducer } from './utils';

const initialState = {
    query: '',
    searchCollection: {},
    trendingCollection: {}
};

const searchCollectionReducer = createAPIReducer({
    actionTypes: ActionTypes.API_SEARCH,
});

const trendingCollectionReducer = createAPIReducer({
    actionTypes: ActionTypes.API_TRENDING,
});

const searchReducer = (state = initialState.query, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_QUERY:
            return action.payload.query;
        default:
            return state;
    }
};
export default combineReducers({
    query: searchReducer,
    searchCollection: searchCollectionReducer,
    trendingCollection: trendingCollectionReducer
});
