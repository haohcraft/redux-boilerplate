import { ActionTypes, RequestActionTypes } from './constants';
export const changeQuery = (query) => ({
    type: ActionTypes.QUERY_CHANGE,
    payload: {
        query
    }
});
export const selectAirport = (selected) => ({
    type: ActionTypes.SELECT_AIRPORT,
    payload: {
        selected
    }
});
export const searchAirport = (query) => ({
    type: ActionTypes.SEARCH_AIRPORT,
    payload: {
        query
    },
    meta: {
        request: {
            actions: RequestActionTypes,
            query
        }
    }
});
