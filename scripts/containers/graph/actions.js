import { ActionTypes } from './constants';
export const highlightPoint = (highlight) => ({
    type: ActionTypes.HIGHLIGHT_POINT,
    payload: {
        highlight
    }
});
export const getHoverTime = (time) => ({
    type: ActionTypes.HOVER_TIME,
    payload: {
        time
    }
});

