import { reduce, camelCase } from 'lodash';
import { API_REQUEST, API_KEY_GIPHY, API_HOST } from '../constants';

const actionTypesMap = {};
export function createActionTypes({ types = [], namespace = '' }) {
    return types.reduce((result, type) => {
        if (!actionTypesMap[`${namespace}_${type}`]) {
            actionTypesMap[`${namespace}_${type}`] = `${namespace}_${type}`;
            return {
                ...result,
                [type]: `${namespace}_${type}`
            };
        }
        throw new Error(`This actionType ${type} already exits.`);
    }, {});
}

export function createActionCreator(actionTypes) {
    return reduce(actionTypes, (result, value, actionType) => ({
        ...result,
        [`${camelCase(actionType)}`]: payload => ({
            type: value,
            payload
        })
    }), {});
}

export function createAPIActionTypes({ namespace }) {
    return createActionTypes({
        namespace,
        types: ['LOADING', 'LOADED', 'ERROR']
    });
}

export function createAPIActionCreator({
    apiURL,
    apiActionTypes,
    parseResponse
}) {
    return params => ({
        type: API_REQUEST,
        payload: {
            apiURL: `${API_HOST}${apiURL}?api_key=${API_KEY_GIPHY}`,
            apiActionTypes,
            parseResponse,
            params: {
                ...params,
                limit: 50
            }
        }
    });
}

export function createAPIReducer({
    initialState = {
        data: null,
        loaded: false,
        loading: false,
        error: null
    },
    actionTypes
}) {
    return (state = initialState, action = {}) => {
        switch (action.type) {
            case actionTypes.LOADING: {
                return {
                    ...state,
                    loaded: false,
                    loading: true,
                    error: null
                };
            }
            case actionTypes.LOADED: {
                const { apiResponse } = action.payload;
                return {
                    ...state,
                    data: apiResponse,
                    loaded: true,
                    loading: false,
                    error: null
                };
            }
            case actionTypes.ERROR: {
                const { apiResponse } = action.payload;
                return {
                    ...state,
                    data: null,
                    loaded: true,
                    loading: false,
                    error: apiResponse
                };
            }
            default:
                return state;
        }
    };
}
