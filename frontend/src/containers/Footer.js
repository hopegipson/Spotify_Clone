import React, { Component} from 'react';
import MusicPlayerContainer from './MusicPlayerContainer'
import SongTracker from '../components/SongTracker'

 export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
            <MusicPlayerContainer token={this.props.token}/>
            <SongTracker/>
            </div>)
        }
    }