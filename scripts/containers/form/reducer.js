import { ActionTypes } from './constants';
const initialState = {
    first: { value: '', isValid: true, temp: '' },
    last: { value: '', isValid: true, temp: '' },
    phone: { value: '', isValid: true, temp: '' },
    email: { value: '', isValid: true, temp: '' },
    request: { value: '', isValid: true, temp: '' }
};
function formReducer(state = initialState, action = {}) {
    const { payload } = action;
    switch (action.type) {
        case ActionTypes.CHANGE_FIRST:
            return {
                ...state,
                first: payload.first
            };
        case ActionTypes.CHANGE_LAST:
            return {
                ...state,
                last: payload.last
            };
        case ActionTypes.CHANGE_PHONE:
            return {
                ...state,
                phone: payload.phone
            };
        case ActionTypes.CHANGE_EMAIL:
            return {
                ...state,
                email: payload.email
            };
        case ActionTypes.CHANGE_REQUEST:
            return {
                ...state,
                request: payload.request
            };
        case ActionTypes.RESET:
            return initialState;
        default:
            return state;
    }
}

export default formReducer;
