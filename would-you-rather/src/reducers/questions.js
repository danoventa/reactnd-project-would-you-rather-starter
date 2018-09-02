import { ADD_QUESTION, GET_QUESTIONS } from "../actions/questions";

export default function questions (state = {}, action){
    switch(action.type){
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            const { question } = action;
            const { id } = question;

            return {
                ...state,
                [id]: question,
            };
        default:
            return state;
    }
}