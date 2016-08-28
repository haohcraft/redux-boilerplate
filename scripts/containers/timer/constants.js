import keyMirror from 'keymirror';
import { makeRequestActions, createRequestReducer } from 'lib/utils';

export const ActionTypes = keyMirror({
    INCREASE_INTERVAL: null,
    DECREASE_INTERVAL: null,
    UPDATE_LOADAVG: null
});
export const RequestActionTypes = makeRequestActions({
    prefix: 'loadAvg'
});

export const RequestReducers = createRequestReducer({
    prefix: 'loadAvg'
});

export const TEN_MINUTES = 1000 * 60 * 10;
export const TWO_MINUTES = 1000 * 60 * 2;
export const TEN_SEC = 1000 * 10;
