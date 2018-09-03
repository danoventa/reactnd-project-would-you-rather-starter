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
            const { user, qid, answer } = action.answer;

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([user])
                    }
                }
            };
        default:
            return state;
    }
}