import { SET_USER } from "../actions/user";

export default function user (state = {}, action ) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.id,
            };
        default:
            return state;
    }
}