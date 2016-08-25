import { combineReducers } from 'redux';
import timerReducer from 'containers/timer/reducer';

export default combineReducers({
    timer: timerReducer
});

