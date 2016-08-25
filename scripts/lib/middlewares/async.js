import _ from 'lodash';
import { makeAjaxRequest } from 'lib/utils';
let activeRequest;
const getLastTenMinLoadAvg = (interval) => {
    const url = 'http://localhost:5050/api/getLastTenMinLoadAvg';
    const params = {
        interval,
    };
    if (activeRequest) activeRequest.abort();
    activeRequest = makeAjaxRequest(url, params);
    return Promise.all([activeRequest]);
};
const Async = (store) => (next) => (action) => {
    next(action);
    if (_.get(action, 'meta.request')) {
        const requestActions = _.get(action, 'meta.request.actions');
        const postRequestFunc = _.get(action, 'meta.request.postRequestFunc');
        const interval = _.get(action, 'meta.request.interval');
        if (interval) {
            store.dispatch({
                type: requestActions.LOADING
            });
            getLastTenMinLoadAvg(interval).then(
                (response) => {
                    let resp = response;
                    if (postRequestFunc && _.isFunction(postRequestFunc)) {
                        resp = postRequestFunc(resp);
                    }
                    store.dispatch({
                        type: requestActions.SUCCESS,
                        payload: {
                            loadAvgData: resp
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
