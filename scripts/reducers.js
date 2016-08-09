import { combineReducers } from 'redux';
import Form from './containers/form';
export default combineReducers({
    form: Form.Reducer,
    choice: () => ({
        people: '4 People',
        date: 'Tues, Sep 30',
        time: '10:00PM'
    }),
    restaurant: () => ({
        name: 'Café Reserve',
        location: '1 Union Square W, New York, NY 10003',
        phone: '(917) 555-3838',
        link: 'https://goo.gl/ag7uJc'
    })
});
