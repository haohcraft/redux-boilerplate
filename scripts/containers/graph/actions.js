import { ActionTypes } from './constants';
export const highlightPoint = (highlight) => ({
    type: ActionTypes.HIGHLIGHT_POINT,
    payload: {
        highlight
    }
});
export const highlightLoadItem = (time) => ({
    type: ActionTypes.HIGHLIGHT_LOAD_ITEM,
    payload: {
        time
    }
});
export const getHoverTime = (time) => ({
    type: ActionTypes.HOVER_TIME,
    payload: {
        time
    }
});
export const selectRange = ({ start, end }) => ({
    type: ActionTypes.SELECT_RANGE,
    payload: {
        start,
        end
    }
});
export const resetSelectRange = () => ({
    type: ActionTypes.RESET_SELECT_RANGE
});

