import { ActionTypes } from './constants';
const intialState = {
    highlight: {
        timestamp: 0,
        loadAvg: 0,
        target: null
    }
};
const graphReducer = (state = intialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.HIGHLIGHT_POINT:
            return {
                ...state,
                highlight: action.payload.highlight
            };
        default:
            return state;
    }
};

export default graphReducer;
