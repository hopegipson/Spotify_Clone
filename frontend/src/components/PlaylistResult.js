import React, { Component} from 'react';
import {
    BrowserRouter as Router, Route,
    Link
  } from "react-router-dom";
import PlaylistView from '../components/PlaylistView'

 class PlaylistResult extends Component {
     render(){
        return(
            <Router>
        <div className="PlaylistResult">
            <h2 className="TitleSection">Playlists</h2>
            <div className="InsidePlaylistResult">
            <div className="Row">
            {this.props.playlists.map(playlist =>(
        <div className="Column">
            <div className="Inner">
            <Link to={`/playlist/${playlist.id}`}>
           {playlist.name}</Link>
            </div>
             </div>
            
          ))}

                  </div>
            </div>
            <Route path="/playlist/:id" render={routerProps => <PlaylistView {...routerProps} user={this.props.state.user} />}/>

        </div></Router>)
}}
export default PlaylistResult