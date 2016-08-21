import _ from 'lodash';
import { makeAjaxRequest } from 'lib/utils';
let activeRequest;
const getAirportList = (query) => {
    const url = 'http://localhost:5050/api/autocomplete';
    const params = {
        query,
    };
    /*eslint-disable*/
    // debugger;
    /*eslint-enable*/

    if (activeRequest) activeRequest.abort();
    activeRequest = makeAjaxRequest(url, params);
    return Promise.all([activeRequest]);
};
const Async = (store) => (next) => (action) => {
    next(action);
    if (_.get(action, 'meta.request')) {
        const requestActions = _.get(action, 'meta.request.actions');
        const query = _.get(action, 'meta.request.query');
        /*eslint-disable*/
        // debugger;
        /*eslint-enable*/
        if (query.length) {
            store.dispatch({
                type: requestActions.LOADING
            });
            getAirportList(query).then(
                (response) => {
                    store.dispatch({
                        type: requestActions.SUCCESS,
                        payload: {
                            airports: _.flatten(response) || []
                        }
                    });
                },
                (error) => {
                    store.dispatch({
                        type: requestActions.ERROR,
                        payload: {
                            error
                        }
                    });
                }
            );
        }
    }
    return;
};

export default Async;
