import keyMirror from 'keymirror';
export const ActionTypes = keyMirror({
    HIGHLIGHT_POINT: null,
    HIGHLIGHT_LOAD_ITEM: null,
    HOVER_TIME: null,
    SELECT_RANGE: null,
    RESET_SELECT_RANGE: null,
});
export const TIME_FUTURE = new Date().getTime() + Number.MAX_SAFE_INTEGER;
