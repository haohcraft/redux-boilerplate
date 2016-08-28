import { ActionTypes } from './constants';
export const increaseThreshold = () => ({
    type: ActionTypes.INCREASE_THRESHOLD
});
export const decreaseThreshold = () => ({
    type: ActionTypes.DECREASE_THRESHOLD
});
export const highlightAlert = (highlight) => ({
    type: ActionTypes.HIGHLIGHT_ALERT,
    payload: {
        highlight
    }
});
