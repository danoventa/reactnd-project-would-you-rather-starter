import {GET_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER} from "../actions/users";

export default function users (state = {}, action){
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                ...action.users,
            };
        case ADD_USER_QUESTION:
            const { question } = action;
            const { author, id } = question;

            const questions = state[author].questions;

            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: questions.concat([id])
                }
            };
        case ADD_USER_ANSWER:
            const { user, qid, answer} = action.answer;

            return {
                ...state,
                [user]: {
                    ...state[user],
                    ...state[user].answers,
                    [qid]: answer
                }
            };
        default:
            return state;
    }
}