import formReducer from './reducer';
import * as Actions from './actions';
import Form from './view';

const form = {
    Reducer: formReducer,
    Actions,
    View: Form
};

export default form;

