import {combineReducers} from 'redux'

import sessionsReducer from "./sessionsReducer";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
    loading: loadingReducer,
    user: userReducer,
    sessions: sessionsReducer,
    categories: categoriesReducer
})