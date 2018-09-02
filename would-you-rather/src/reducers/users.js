import { GET_USERS, ADD_USER_QUESTION } from "../actions/users";

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

            const x = {
                ...state,
                [author]: {
                    ...state[author],
                    questions: questions.concat([id])
                }
            };

            console.log(x);

            return x;
        default:
            return state;
    }
}