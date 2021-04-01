import React, { Component } from 'react';
import Search from '../components/Search'
import { Route } from 'react-router-dom';
import AlbumsSongsArtistsContainer from './AlbumsSongsArtistsContainer';


class SearchPage extends Component {   
    render(
    ) { 

        return (
        
     <div>
    <Route exact path={this.props.match.url} render={routerProps =>  <Search {...routerProps}/>}/>
    <Route path={`${this.props.match.url}/:searchTerm`} render={routerProps => <div><Search {...routerProps}  /> <AlbumsSongsArtistsContainer/></div>}/>
 
        "SearchPage"
    </div>
  )
        }}
  
  export default SearchPage