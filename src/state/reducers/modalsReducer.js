import {modalActions} from "../actions/enums";

const modals = {
    addSessionModal: false,
    infoSessionModal: false
};

export default (state=modals, action) => {
    switch (action.type) {
        case modalActions.OPEN_MODAL:
            return {
                ...state,
                [action.payload]: true
            };
        case modalActions.CLOSE_MODAL:
            return {
                ...state,
                [action.payload]: false
            };
        default:
            return state;
    }
};