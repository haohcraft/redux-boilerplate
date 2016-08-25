import { ActionTypes } from './constants';
export const highlightPoint = (highlight) => ({
    type: ActionTypes.HIGHLIGHT_POINT,
    payload: {
        highlight
    }
});
