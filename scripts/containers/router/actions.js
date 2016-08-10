import { ActionTypes } from './constants';
export const setPage = ({ index }) => ({
    type: ActionTypes.SET_PAGE,
    payload: {
        index
    }
});

