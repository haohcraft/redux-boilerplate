import _ from 'lodash';
import { RequestActionTypes, ActionTypes } from './constants';
const initialState = {
    loading: false,
    loaded: false,
    error: false,
    query: '',
    list: []
};

const autocompleteReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.QUERY_CHANGE:
            return {
                ...state,
                query: _.get(action, 'payload.query', '')
            };
        case RequestActionTypes.LOADING:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false
            };
        case RequestActionTypes.SUCCESS: {
            const artists = _.get(action, 'payload', []);
            const list = _.reduce(artists, (r, v) => {
                r.push({
                    name: v.artistName,
                    description: v.artistBio,
                    artistId: v.artistId
                });
                return r;
            }, []);
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
