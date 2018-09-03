import { showLoading, hideLoading } from 'react-redux-loading';

import {getInitialData, saveQuestion, saveQuestionAnswer} from "../utils/api";
import {addUserAnswer, addUserQuestion, getUsers} from "./users";
import {getQuestions, addQuestion, addQuestionAnswer} from "./questions";

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

export function handleAddAnswer(questionId, answer){
    return (dispatch, getState) => {
        const {user} = getState();
        dispatch(showLoading());

        const userAnswer = {
            user: user.user,
            qid: questionId,
            answer,
        };

        return saveQuestionAnswer(userAnswer)
            .then(() => {
                dispatch(addUserAnswer(userAnswer));
                dispatch(addQuestionAnswer(userAnswer));
            })
            .then(() => dispatch(hideLoading()));
    }
}