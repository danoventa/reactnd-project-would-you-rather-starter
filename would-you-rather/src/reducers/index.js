import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading';

import user from "./user";
import users from "./users";
import questions from "./questions";

export default combineReducers({
    user,
    users,
    questions,
    loadingBar,
});