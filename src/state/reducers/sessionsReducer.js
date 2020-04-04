import {sessionActions} from '../actions/enums';

export default (state=[], action) => {
    switch (action.type) {
        case sessionActions.FETCH_SESSIONS:
            return action.payload;
        case sessionActions.LOAD_MORE_SESSIONS:
            return [...state, ...action.payload];
        case sessionActions.CREATE_SESSION:
            return [action.payload, ...state];
        default:
            return state
    }
}