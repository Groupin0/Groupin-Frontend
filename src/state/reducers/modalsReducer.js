import {modalActions} from "../actions/enums";

const modals = {
    isModalOpen: false,
    addSessionModal: false,
    infoSessionModal: false
};

export default (state=modals, action) => {
    switch (action.type) {
        case modalActions.OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
                [action.payload]: true
            };
        case modalActions.CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                [action.payload]: false
            };
        default:
            return state;
    }
};