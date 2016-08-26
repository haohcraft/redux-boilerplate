import { ActionTypes, RequestActionTypes, TEN_MINUTES } from './constants';
import _ from 'lodash';
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
            interval: 10,
            postRequestFunc: (resp) => {
                const loadAvg = resp[0].loadavgData;
                const now = new Date().getTime();
                const data = _.filter(loadAvg.data, (item) => {
                    if (item.timestamp >= now - TEN_MINUTES && item.timestamp <= now) {
                        return true;
                    }
                    return false;
                });
                return {
                    ...loadAvg,
                    data
                };
            }
        }
    }
});
