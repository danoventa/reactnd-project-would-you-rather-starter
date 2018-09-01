import { showLoading, hideLoading } from 'react-redux-loading';

import { getInitialData } from "../utils/api";
import { setUser } from "./user";
import { getUsers } from "./users";
import {getQuestions, handleAddQuestion} from "./questions";

const user = 'sarahedo';

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, question, questions}) => {
                dispatch(getUsers(users));
                dispatch(getQuestions(questions));
                dispatch(setUser(user));
                dispatch(hideLoading());
            }
        )
    }
}