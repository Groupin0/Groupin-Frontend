import {loadingAction} from "../actions/enums";

export default (state=false, action) => {
    switch (action.type) {
        case loadingAction:
            return action.payload;
        default:
            return state
    }
}