import { ActionTypes } from './constants';
const initialState = {
    value: ''
};
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.QUERY_CHANGE:
            return {
                ...state,
                value: action.payload.query
            };
        default:
            return state;
    }
};
export default searchReducer;
