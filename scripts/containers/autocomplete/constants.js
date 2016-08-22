import { makeRequestActions } from 'lib/utils';
import keyMirror from 'keymirror';
export const ActionTypes = keyMirror({
    SEARCH_AIRPORT: null,
    SELECT_AIRPORT: null,
    QUERY_CHANGE: null
});

export const RequestActionTypes = makeRequestActions({
    prefix: 'search'
});
