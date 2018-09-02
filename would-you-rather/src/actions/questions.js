export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions,
    }
}