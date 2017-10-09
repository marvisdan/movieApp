import React, { Component } from 'react';
import MovieResults from './MovieResult';
class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row text-center">
              <div className="jumbotron">
                  <h1 className="display-3">Movies App</h1>
                  <p> Who doesn't love movies ?</p>
              </div>
          </div>
          <div className="row">
              <MovieResults />
          </div>
      </div>
    );
  }
}

export default App;
