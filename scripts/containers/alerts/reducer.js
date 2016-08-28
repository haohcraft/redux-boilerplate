import { RequestActionTypes, TEN_SEC, TWO_MINUTES } from 'containers/timer/constants';
import { ActionTypes } from './constants';
import { getAlerts } from './utils';
import _ from 'lodash';
const initialState = {
    peroid: Math.floor(TWO_MINUTES / TEN_SEC),
    threshold: 1.1,
    alerts: [],
    highlight: {
        timestamp: 0,
        type: ''
    }
};

const alertsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.HIGHLIGHT_ALERT:
            return {
                ...state,
                highlight: action.payload.highlight
            };
        case ActionTypes.INCREASE_THRESHOLD:
            return {
                ...state,
                threshold: parseFloat((state.threshold + 0.1).toFixed(2))
            };
        case ActionTypes.DECREASE_THRESHOLD: {
            const newThreshold = parseFloat((state.threshold - 0.1).toFixed(2));
            if (newThreshold > 0) {
                return {
                    ...state,
                    threshold: newThreshold
                };
            }
            return state;
        }
        case RequestActionTypes.SUCCESS: {
            const data = _.get(action, 'payload.loadAvgData.data');
            const alerts = getAlerts(state.alerts, data, state.threshold, state.peroid);
            return {
                ...state,
                alerts
            };
        }
        default:
            return state;
    }
};

export default alertsReducer;
