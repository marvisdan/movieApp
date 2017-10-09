import { ADD_FAV } from '../actions';

export default function addToFavorite(state = [], action ){
    switch(action.type){
        case ADD_FAV:
            let favoriteMovies = [...state, action.movie];
            return favoriteMovies;
        default:
            return state;
    }
}