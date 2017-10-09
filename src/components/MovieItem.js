import React, { Component } from 'react';
import { addToFavorited } from '../actions';
import { connect } from 'react-redux';
const urlComponent = "https://image.tmdb.org/t/p/w342/";
class MovieItem extends  Component {
    constructor(props){
        super(props);
        this.state = {
            favorited: false
        };
    }
    addToFavorite(){
        this.setState({favorited: !this.state.favorited});
        this.props.addToFavorited(this.props.movie);
    }
    displayFav(){
        if(!this.state.favorited){ return <span className="glyphicon glyphicon-heart-empty" onClick={() => this.addToFavorite()}/> }
        else { return <span className="glyphicon glyphicon-heart" onClick={() => this.addToFavorite()}/> }
    }
    render(){
        console.log(this.props);
        return(
            <div className=" col-sm-3">
                <div className="thumbnail">
                    <img src={urlComponent+ this.props.movie.poster_path} alt="..."/>
                        <div className="caption">
                            <h3 className="title">{this.props.movie.title}</h3>
                            <p className="description">{this.props.movie.overview}</p>
                            <p>Ratings - <span className="badge badge-default"> <span className="glyphicon glyphicon-star"/> {this.props.movie.vote_average} </span></p>
                            <p>{this.displayFav()}</p>
                        </div>
                </div>
            </div>
        );
    }
}
export  default connect(null, {addToFavorited})(MovieItem);