import {sessionActions} from '../actions/enums';

export default (state=[], action) => {
    switch (action.type) {
        case sessionActions.FETCH_SESSIONS:
            return action.payload;
        case sessionActions.CREATE_SESSION:
            return [...state, action.payload];
        default:
            return state
    }
}