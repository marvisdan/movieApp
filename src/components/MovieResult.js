import React, { Component } from 'react';
import Search from './Search';
import MovieItem  from './MovieItem';
import { connect } from 'react-redux';
import  FavoriteMovieList from './FavoriteMovieList';
class MovieResults extends Component {
    render(){
        return(
            <div>
                <FavoriteMovieList/>
                <hr/>
                <h1>Movie Result will go here</h1>
                <Search/>
                {this.props.movies.map((item)=> { return  <MovieItem key={item.id} movie={item} /> })}
            </div>
        );
    }
}
function mapStateProps(state){
    console.log(state);
    return {
        movies: state.movies
    }
}
export default connect(mapStateProps, null)(MovieResults);