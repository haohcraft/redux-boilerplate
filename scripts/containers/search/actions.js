import { ActionTypes } from './constants';
export const changeQuery = (query) => ({
    type: ActionTypes.QUERY_CHANGE,
    payload: {
        query
    }
});

