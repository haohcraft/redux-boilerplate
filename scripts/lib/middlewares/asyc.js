import _ from 'lodash';
import { makeAjaxRequest } from 'lib/utils';
let activeRequest;
const getArtistList = (query) => {
    const url = 'http://api-3283.iheart.com/api/v1/catalog/searchAll';
    const params = {
        keywords: query,
        queryTrack: false,
        queryTalkTheme: false,
        countryCode: 'US',
        queryBundle: false,
        queryArtist: true,
        queryStation: false,
        queryFeatureStation: false,
        queryTalkShow: false
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
        /*eslint-disable*/
        // debugger;
        /*eslint-enable*/
        const query = _.get(store.getState(), 'query.value');
        if (query.length) {
            store.dispatch({
                type: requestActions.LOADING
            });
            getArtistList(query).then(
                (response) => {
                    store.dispatch({
                        type: requestActions.SUCCESS,
                        payload: {
                            artists: response[0].artists || []
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
