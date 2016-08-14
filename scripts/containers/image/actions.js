import { ActionTypes, RequestActionTypes } from './constants';
export const searchArtistList = (query) => ({
    type: ActionTypes.SEARCH_LIST,
    payload: {
        query
    },
    meta: {
        request: {
            actions: RequestActionTypes
        }
    }
});
