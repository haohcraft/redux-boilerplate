import reqwest from 'reqwest';
import _ from 'lodash';

export const makeAjaxRequest = (url, params, opts) => {
    const requestOpts = {
        url,
        method: 'get',
        type: 'json',
        data: params,
        crossOrigin: true,
        ...opts
    };
    return reqwest(requestOpts);
};

export const makeRequestActions = ({ prefix }) => {
    const base = ['LOADING', 'SUCCESS', 'ERROR'];
    return _.reduce(base, (result, v) => {
        result[v] = `${prefix}.${v}`.toUpperCase(); // eslint-disable-line no-param-reassign
        return result;
    }, {});
};
