import React, { Component } from 'react';
import {connect} from 'react-redux';

class FavoriteMovieList extends Component{
    render(){
        return(
          <div>
              <h4> My Favorite Movies</h4>
          </div>
        );
    }
}
function mapStateToProps(state){
    console.log('Favorite Movies',state);
    return {

    };
}
export default connect(mapStateToProps, null)(FavoriteMovieList);