import { ActionTypes, RequestActionTypes, RequestReducers, TEN_MINUTES } from './constants';
const now = new Date().getTime();
const initialState = {
    loading: false,
    loaded: false,
    error: false,
    loadAvgData: {
        data: [
            {
                timestamp: now - TEN_MINUTES,
                loadAvg: 1
            }, {
                timestamp: now,
                loadAvg: 3
            }
        ],
        min: 0,
        max: 4
    },
    updateInterval: 1000 * 200
};
const timerReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.UPDATE_INTERVAL:
            return {
                ...state,
                updateInterval: action.payload.updateInterval
            };
        case RequestActionTypes.LOADING:
            return {
                ...state,
                ...RequestReducers[RequestActionTypes.LOADING]
            };
        case RequestActionTypes.ERROR:
            return {
                ...state,
                loadAvgData: [],
                ...RequestReducers[RequestActionTypes.ERROR]
            };
        case RequestActionTypes.SUCCESS: {
            return {
                ...state,
                ...RequestReducers[RequestActionTypes.SUCCESS],
                loadAvgData: action.payload.loadAvgData
            };
        }
        default:
            return state;
    }
};
export default timerReducer;
