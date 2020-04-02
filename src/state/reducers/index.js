import {combineReducers} from 'redux'

import sessionsReducer from "./sessionsReducer";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";
import loadingReducer from "./loadingReducer";
import modalsReducer from "./modalsReducer";

export default combineReducers({
    loading: loadingReducer,
    modals: modalsReducer,
    user: userReducer,
    sessions: sessionsReducer,
    categories: categoriesReducer
})