import { ActionTypes } from './constants';

export const changeFirst = (v) => ({
    type: ActionTypes.CHANGE_FIRST,
    payload: {
        first: v
    }
});

export const changeLast = (v) => ({
    type: ActionTypes.CHANGE_LAST,
    payload: {
        last: v
    }
});

export const changePhone = (v) => ({
    type: ActionTypes.CHANGE_PHONE,
    payload: {
        phone: v
    }
});

export const changeEmail = (v) => ({
    type: ActionTypes.CHANGE_EMAIL,
    payload: {
        email: v
    }
});

export const changeRequest = (v) => ({
    type: ActionTypes.CHANGE_REQUEST,
    payload: {
        request: v
    }
});

export const resetForm = () => ({
    type: ActionTypes.RESET
});

