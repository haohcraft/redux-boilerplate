import _ from 'lodash';
import { RequestActionTypes, ActionTypes } from './constants';
const initialState = {
    loading: false,
    loaded: false,
    error: false,
    query: '',
    list: [],
    selected: {
        start: {
            code: '',
            lat: 0,
            lon: 0,
        },
        end: {
            code: '',
            lat: 0,
            lon: 0,
        },
        shouldSetStart: true
    }
};

const autocompleteReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.QUERY_CHANGE:
            return {
                ...state,
                query: _.get(action, 'payload.query', '')
            };
        case ActionTypes.SELECT_AIRPORT:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    ..._.get(action, 'payload.selected'),
                    shouldSetStart: !state.selected.shouldSetStart
                }
            };
        case RequestActionTypes.LOADING:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false
            };
        case RequestActionTypes.SUCCESS: {
            const list = _.get(action, 'payload.airports', []);
            return {
                ...state,
                loading: false,
                loaded: true,
                error: false,
                list
            };
        }
        case RequestActionTypes.ERROR:
            return {
                ...state,
                list: [],
                loading: false,
                loaded: true,
                error: true
            };
        default:
            return state;
    }
};

export default autocompleteReducer;
