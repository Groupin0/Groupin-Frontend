import {loadingAction} from "../actions/enums";

export default (state=true, action) => {
    switch (action.type) {
        case loadingAction:
            return action.payload;
        default:
            return state
    }
}