import React, { Component} from 'react';

export default class LoadingScreen extends Component {

    
    render(){

        return(<div className="wholeDiv">
            <div className= "centerImage">
            <img className="SpotifyLogo" src="https://s22.q4cdn.com/540910603/files/design/Spotify_Logo_White.png" alt="Girl in a jacket"></img>
            <h2>Music For Everyone</h2>
            <h4 className="TextElements">Welcome! Loading your music...</h4>
            </div>
       </div>
        )
    }
}
