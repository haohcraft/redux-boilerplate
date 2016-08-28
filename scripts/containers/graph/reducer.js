import { ActionTypes, TIME_FUTURE } from './constants';
const intialState = {
    highlight: {
        timestamp: 0,
        loadAvg: 0,
        target: null
    },
    hoverTime: 0,
    selectedRange: {
        start: 0,
        end: TIME_FUTURE
    }
};
const graphReducer = (state = intialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.RESET_SELECT_RANGE:
            return {
                ...state,
                selectedRange: {
                    start: 0,
                    end: TIME_FUTURE
                }
            };
        case ActionTypes.SELECT_RANGE:
            return {
                ...state,
                selectedRange: action.payload
            };
        case ActionTypes.HIGHLIGHT_LOAD_ITEM:
        case ActionTypes.HOVER_TIME:
            return {
                ...state,
                hoverTime: action.payload.time
            };
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
