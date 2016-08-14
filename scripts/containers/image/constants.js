import { makeRequestActions } from 'lib/utils';
import keyMirror from 'keymirror';
export const ActionTypes = keyMirror({
    NEW_LIST: null,
    SEARCH_LIST: null
});

export const RequestActionTypes = makeRequestActions({
    prefix: 'search'
});

export const MAX_NUM_ARTISTS = 6;
