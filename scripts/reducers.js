import { combineReducers } from 'redux';
import autoCompleteReducer from 'containers/autocomplete/reducer';

export default combineReducers({
    autocomplete: autoCompleteReducer
});

