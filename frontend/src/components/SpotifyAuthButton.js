import React, { Component} from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from "./config";

import './SpotifyAuthButton.css';

export default class SpotifyAuthButton extends Component {

    

    render(){

        const hrefURI = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`

        return(<div className="wholeDiv">
            <div className= "centerImage">
            <img className="SpotifyLogo" src="https://s22.q4cdn.com/540910603/files/design/Spotify_Logo_White.png" alt="Girl in a jacket"></img>
            <h2>Music For Everyone</h2>
            <h4 className="TextElements">Sign in using your Spotify Account for music and playlist creation on your home device powered by the Spotify API.</h4>
            <button type="button" className="btn btn-outline-info">
            <a className="SpotifyButton"
        href={hrefURI}
        >
            Login Now</a></button>
            </div>
       </div>
        )
    }
}
