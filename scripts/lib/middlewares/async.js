import _ from 'lodash';
import { makeAjaxRequest } from 'lib/utils';
let activeRequest;
const getLastTenMinLoadAvg = (query) => {
    const url = 'http://localhost:5050/api/getLastTenMinLoadAvg';
    const params = {
        query,
    };
    if (activeRequest) activeRequest.abort();
    activeRequest = makeAjaxRequest(url, params);
    return Promise.all([activeRequest]);
};
const Async = (store) => (next) => (action) => {
    next(action);
    if (_.get(action, 'meta.request')) {
        const requestActions = _.get(action, 'meta.request.actions');
        const query = _.get(action, 'meta.request.query');
        if (query.length) {
            store.dispatch({
                type: requestActions.LOADING
            });
            getLastTenMinLoadAvg(query).then(
                (response) => {
                    store.dispatch({
                        type: requestActions.SUCCESS,
                        payload: {
                            loadAvgData: _.flatten(response) || []
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
