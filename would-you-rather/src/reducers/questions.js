import { ADD_QUESTION, GET_QUESTIONS, ADD_QUESTION_ANSWER } from "../actions/questions";

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
        case ADD_QUESTION_ANSWER:
            const { userAnswer } = action;
            const { questionid, user, answer } = userAnswer;

            const x = state[questionid][answer].votes;
            const y = state[questionid][answer].votes;
            
            console.log(x);
            console.log(y);

            return {
                ...state,
            };
        default:
            return state;
    }
}