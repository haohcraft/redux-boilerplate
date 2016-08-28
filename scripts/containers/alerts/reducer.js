import { RequestActionTypes, TEN_SEC, TWO_MINUTES } from 'containers/timer/constants';
import { ALERT_TYPE, ActionTypes } from './constants';
import _ from 'lodash';
const initialState = {
    peroid: Math.floor(TWO_MINUTES / TEN_SEC),
    threshold: 1.9,
    alerts: []
};
const calcAvg = (arr) => {
    const sum = arr.reduce((r, v) => (r + v), 0);
    return sum / arr.length;
};

const alertsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
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
            const alerts = [...state.alerts];
            let alert;
            const data = _.get(action, 'payload.loadAvgData.data');
            const lastAlert = alerts[0];
            const latest = data.slice(-1)[0];
            const lastTwoMinLoad = data.slice(-1 - state.peroid);
            const avg = calcAvg(lastTwoMinLoad.map((load) => (load.loadAvg)));
            /*eslint-disable*/
            // console.log('avg: ', avg);
            /*eslint-enable*/
            if (avg >= state.threshold) {
                alert = {
                    load: avg,
                    timestamp: latest.timestamp,
                    type: ALERT_TYPE.WARNING
                };
            // Only if the previous alert is a WARNING type
            } else if (lastAlert && lastAlert.type === ALERT_TYPE.WARNING) {
                alert = {
                    load: avg,
                    timestamp: latest.timestamp,
                    type: ALERT_TYPE.RECOVER
                };
            }
            if (alert) {
                alerts.unshift(alert);
            }
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
