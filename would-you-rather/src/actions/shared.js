import { showLoading, hideLoading } from 'react-redux-loading';

import {getInitialData, saveQuestion} from "../utils/api";
import {addUserQuestion, getUsers} from "./users";
import {getQuestions, addQuestion} from "./questions";

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, question, questions}) => {
                dispatch(getUsers(users));
                dispatch(getQuestions(questions));
                dispatch(hideLoading());
            }
        )
    }
}

export function handleAddQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const {user} = getState();
        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: user.user
        })
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addUserQuestion(question));
            })
            .then(() => dispatch(hideLoading()));
    }
}