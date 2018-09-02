import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOne, optionTwo){
    return (dispatch, getState) => {
        const {user} = getState();
        dispatch(showLoading());

        return saveQuestion({
            optionOne,
            optionTwo,
            author: user.user
        })
            .then((question) => {
                dispatch(addQuestion(question))
            })
            .then(() => dispatch(hideLoading()));
    }
}

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions,
    }
}