import {combineReducers} from 'redux'

import sessionsReducer from "./sessionsReducer";
import userReducer from "./userReducer";

export default combineReducers({
    user: userReducer,
    sessions: sessionsReducer
})