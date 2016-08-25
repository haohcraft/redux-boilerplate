import { ActionTypes, RequestActionTypes } from './constants';
export const updateInterval = (interval) => ({
    type: ActionTypes.UPDATE_INTERVAL,
    payload: {
        updateInterval: interval
    }
});
export const updateLoadAvg = () => ({
    type: ActionTypes.UPDATE_LOADAVG,
    meta: {
        request: {
            actions: RequestActionTypes,
            interval: 10
        }
    }
});
