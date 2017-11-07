import { identity } from 'lodash';
import axios from 'axios';
import { API_REQUEST } from '../constants';


const APIMiddleware = ({ dispatch }) => next => action => {
    if (action.type !== API_REQUEST) {
        return next(action);
    }
    const {
        apiURL,
        params,
        method = 'get',
        apiActionTypes = {
            LOADING: 'LOADING',
            LOADED: 'LOADED',
            ERROR: 'ERROR'
        },
        parseResponse = identity
    } = action.payload;


    next({ type: apiActionTypes.LOADING });
    const req = axios({
        method,
        url: apiURL,
        params,
    });

    return (
        req.then(response => {
            dispatch({
                type: apiActionTypes.LOADED,
                payload: {
                    apiResponse: parseResponse(response.data)
                }
            });
        })
        .catch((error) => {
            dispatch({
                type: apiActionTypes.ERROR,
                error: true,
                payload: {
                    apiResponse: error instanceof Error ? error : new Error(error)
                }
            });
        })
    );
};

export default APIMiddleware;
