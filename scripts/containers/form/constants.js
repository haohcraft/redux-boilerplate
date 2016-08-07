import keyMirror from 'keymirror';
const isEmail = (val) => {
    /*eslint-disable*/
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /*eslint-enabile*/
    return re.test(val);
};
const isNumber = (val) => {
    return !isNaN(parseFloat(val)) && isFinite(val);
};
export const ActionTypes = keyMirror({
    CHANGE_FIRST: null,
    CHANGE_LAST: null,
    CHANGE_EMAIL: null,
    CHANGE_PHONE: null,
    CHANGE_REQUEST: null,
    SUBMIT: null,
    RESET: null
});

export const formFields = [
    {
        name: 'first',
        placeholder: "First Name",
        validate: {
            content: 'Enter a valid first name',
            func: (v) => {
                return v.length > 2;
            }
        }
    }, {
        name: 'last',
        placeholder: "Last Name",
        validate: {
            content: 'Enter a valid last name',
            func: (v) => {
                return v.length > 2;
            }
        }
    }, {
        name: 'phone',
        placeholder: "Mobile Phone Name",
        validate: {
            content: 'Enter a valid phone number',
            func: (v) => {
                return v.length === 10 && isNumber(v);
            }
        }
    }, {
        name: 'email',
        placeholder: "Email Address",
        validate: {
            content: 'Enter a valid email address',
            func: (v) => {
                return isEmail(v);
            }
        }
    }, {
        name: 'request',
        placeholder: "Special Requests for Bar Bolonat (Optional)",
        validate: {
            content: '',
            func: () => (true)
        }
    }
];