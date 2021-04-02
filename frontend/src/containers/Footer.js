import React, { Component} from 'react';
import MusicPlayerContainer from './MusicPlayerContainer'


 export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
            <MusicPlayerContainer token={this.props.token} playingRecordingId="spotify:track:4iV5W9uYEdYUVa79Axb7Rh"/>

            </div>)
        }
    }