import { combineReducers } from 'redux';
import imageReducer from 'containers/image/reducer';
import searchReducer from 'containers/search/reducer';
export default combineReducers({
    list: imageReducer,
    query: searchReducer
});

