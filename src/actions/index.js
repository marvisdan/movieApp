export const MOVIES = "MOVIES";
export const ADD_FAV = "ADD_FAV";

export function movies(items){
    const action = {
        type: MOVIES,
        items
    };
    return action;
}

export function addToFavorited(movie){
    return {
        type: ADD_FAV,
        movie
    }
}