import _ from 'lodash';
import { ActionTypes, RequestActionTypes, MAX_NUM_ARTISTS } from './constants';
const initialState = {
    loading: false,
    loaded: false,
    error: false,
    list: [
        {
            name: 'The Weeknd',
            description: 'Feat. August Alsina, Jeremih and more',
            artistId: 744880
        }, {
            name: 'Selena Gomez',
            description: 'Feat. Ariana Grande, Demi Lovato and more',
            artistId: 57706
        }, {
            name: 'R. City',
            description: 'Feat. Nelly, Iyaz, Wiz Khalifa and more',
            artistId: 30005067
        }, {
            name: 'Justin Bieber',
            description: 'Feat. Shawn Mendes, One Direction and more',
            artistId: 44368
        }, {
            name: 'Major Lazer',
            description: 'Feat. Iyaz, Dillon Francis & DJ Snake and more',
            artistId: 43557
        }, {
            name: 'Taylor Swift',
            description: 'Feat. Meghan Trainor, Katy Perry and more',
            artistId: 33221
        }
    ]
};

const imageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.NEW_LIST:
            return {
                ...state,
                list: action.payload.list
            };
        case RequestActionTypes.LOADING:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false
            };
        case RequestActionTypes.SUCCESS: {
            const artists = _.get(action, 'payload.artists', []).slice(0, MAX_NUM_ARTISTS);
            const list = _.reduce(artists, (r, v) => {
                r.push({
                    name: v.artistName,
                    description: v.artistBio,
                    artistId: v.artistId
                });
                return r;
            }, []);
            return {
                ...state,
                loading: false,
                loaded: true,
                error: false,
                list
            };
        }
        case RequestActionTypes.ERROR:
            return {
                ...state,
                list: [],
                loading: false,
                loaded: true,
                error: true
            };
        default:
            return state;
    }
};

export default imageReducer;
