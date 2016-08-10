import { ActionTypes } from './constants';
const initialState = {
    currentIndex: 0
};
const routerReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.SET_PAGE:
            return {
                currentIndex: action.payload.index
            };
        default:
            return state;
    }
};

export default routerReducer;
