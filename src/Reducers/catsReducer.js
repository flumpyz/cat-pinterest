import {CAT_SET_INFO, CATS_GET_INFO, CAT_DELETE_INFO} from "../Actions/catsActions";
import {getFavoriteCatValues, setFavoriteCatValues} from "../Services/localStorageService";

const initialState = {
    catsInfo: getFavoriteCatValues()
}

export function catsReducer(state = initialState, action) {
    switch (action.type) {
        case (CAT_SET_INFO):
            const favorite = Array.prototype.concat(getFavoriteCatValues(), action.payload);
            console.log(favorite);
            setFavoriteCatValues(favorite);
            state.catsInfo = getFavoriteCatValues();
            return {...state, catsInfo: state.catsInfo}
        case (CATS_GET_INFO):
            state.catsInfo = getFavoriteCatValues();
            return {...state};
        case (CAT_DELETE_INFO):
            state.catsInfo = getFavoriteCatValues();
            const index = state.catsInfo.findIndex(favoriteCat => favoriteCat.url === action.payload.url);
            state.catsInfo.splice(index, 1);
            setFavoriteCatValues(state.catsInfo);
            return {...state, catsInfo: state.catsInfo}
        default:
            return state;
    }
}