import keyMirror from 'keymirror';
export const TWO_MINUTES = 1000 * 60 * 2;
export const ALERT_TYPE = keyMirror({
    WARNING: null,
    RECOVER: null
});
export const ActionTypes = keyMirror({
    INCREASE_THRESHOLD: null,
    DECREASE_THRESHOLD: null
});

