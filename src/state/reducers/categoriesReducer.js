import {categoriesActions} from "../actions/enums";

export default (state=[], action) => {
    switch (action.type) {
        case categoriesActions.FETCH_CATEGORIES:
            return action.payload;
        default:
            return state;
    }
}