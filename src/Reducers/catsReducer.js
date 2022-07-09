import {CAT_SET_INFO, CATS_GET_INFO} from "../Actions/catsActions";

const initialState = {
    catsInfo: []
}

export function catsReducer(state = initialState, action) {
    switch (action.type) {
        case (CAT_SET_INFO):
            state.catsInfo.push(action.payload);
            return {...state, catsInfo: state.catsInfo}
        case (CATS_GET_INFO):
            return {...state};
        default:
            return state;
    }
}