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
        const interval = _.get(action, 'meta.request.interval');
        if (interval) {
            store.dispatch({
                type: requestActions.LOADING
            });
            getLastTenMinLoadAvg(interval).then(
                (response) => {
                    store.dispatch({
                        type: requestActions.SUCCESS,
                        payload: {
                            loadAvgData: response[0].loadavgData || []
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
