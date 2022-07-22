import _ from 'lodash';

import { 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    if (action.type === CREATE_STREAM || action.type === FETCH_STREAM || action.type === EDIT_STREAM) {
        return { ...state, [action.payload.id]: action.payload };
    } else if (action.type === DELETE_STREAM) {
        return _.omit(state, action.payload);
    } else if (action.type === FETCH_STREAMS) {
        return { ...state, ..._.mapKeys(action.payload, 'id') };
    }
    return state;
};