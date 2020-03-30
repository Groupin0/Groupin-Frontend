import {userActions} from "../actions/enums";

export default (state=null, action) => {
    switch (action.type) {
        case userActions.FETCH_USER:
            return action.payload;
        default:
            return state;
    }
}