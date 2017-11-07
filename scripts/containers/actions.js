import {
    createActionTypes,
    createActionCreator,
    createAPIActionCreator,
    createAPIActionTypes
} from './utils';

const parseResponse = response => response.data.map(r => r.images.fixed_width);

export const ActionTypes = {
    ...createActionTypes({
        namespace: 'SEARCH',
        types: [
            'CHANGE_QUERY'
        ]
    }),
    API_SEARCH: createAPIActionTypes({ namespace: 'API_SEARCH' }),
    API_TRENDING: createAPIActionTypes({ namespace: 'API_TRENDING' })
};

export default {
    ...createActionCreator(ActionTypes),
    search: createAPIActionCreator({
        apiActionTypes: ActionTypes.API_SEARCH,
        apiURL: '/v1/gifs/search',
        parseResponse
    }),
    getTrending: createAPIActionCreator({
        apiActionTypes: ActionTypes.API_TRENDING,
        apiURL: '/v1/gifs/trending',
        parseResponse
    })
};

