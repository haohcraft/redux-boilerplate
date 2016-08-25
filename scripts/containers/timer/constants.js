import keyMirror from 'keymirror';
import { makeRequestActions, createRequestReducer } from 'lib/utils';
export const ActionTypes = keyMirror({
    UPDATE_INTERVAL: null,
    UPDATE_LOADAVG: null
});
export const RequestActionTypes = makeRequestActions({
    prefix: 'loadAvg'
});

export const RequestReducers = createRequestReducer({
    prefix: 'loadAvg'
});

export const TEN_MINUTES = 1000 * 60 * 10;
