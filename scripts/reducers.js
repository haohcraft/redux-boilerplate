import { combineReducers } from 'redux';
import timerReducer from 'containers/timer/reducer';
import graphReducer from 'containers/graph/reducer';
import alertsReducer from 'containers/alerts/reducer';

export default combineReducers({
    timer: timerReducer,
    graph: graphReducer,
    alerts: alertsReducer
});

