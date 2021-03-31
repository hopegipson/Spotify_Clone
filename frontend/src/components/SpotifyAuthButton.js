import React, { Component} from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from "./config";


export default class SpotifyAuthButton extends Component {

    

    render(){

        const hrefURI = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`

        return(<a 
        href={hrefURI}
        >
            Spotify Auth Button</a>
        )
    }
}
