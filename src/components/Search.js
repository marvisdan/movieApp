import React, { Component } from 'react';
import  { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { API_KEY } from '../secret';
import { movies } from '../actions';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        };
        this.searchOnClick= this.searchOnClick.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }
    searchOnClick(){
        console.log('search button click', this.state.query);
        let url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${this.state.query}&include_adult=false`;
        console.log(url);
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then(jsonObj => this.props.movies(jsonObj.results));
    }

    updateSearch(e){
        this.setState({query: e.target.value})
    }
    render(){
        return(
         <div className="">
             <Form inline className="col-md-12 col-md-offset-3 ">
                 <FormGroup>
                     <ControlLabel> Search </ControlLabel>
                     {' '}
                     <FormControl
                     type="text"
                     placeholder="wonder woman"
                     onChange={this.updateSearch}
                     >
                     </FormControl>
                     {' '}
                     <Button bsStyle="success" onClick={this.searchOnClick}>Submit</Button>
                 </FormGroup>
             </Form>
         </div>
        );
    }
}
export default connect(null, { movies })(Search);