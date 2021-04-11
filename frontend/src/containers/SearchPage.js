import React, { Component } from 'react';
import Search from '../components/Search'
import { Route } from 'react-router-dom';
import AlbumsSongsArtistsContainer from './ContentContainer';

class SearchPage extends Component {   
    render(
    ) { 
        return (
        
     <div>
    <Route exact path={this.props.match.url} render={routerProps =>  <Search {...routerProps}/>}/>
    <Route path={`${this.props.match.url}/:searchTerm`} render={routerProps => <div><Search {...routerProps}  /> <AlbumsSongsArtistsContainer {...routerProps} /></div>}/>
    
     </div>
  )
        }}
  
  export default SearchPage