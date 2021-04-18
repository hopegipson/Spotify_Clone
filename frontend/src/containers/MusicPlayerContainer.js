import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';

import {loadSpotifyScript} from '../actions/musicPlayerActions'
import { connect } from 'react-redux';
import { addPlayer, changeTrackerSong } from '../actions/musicPlayerActions';
import { addDevice } from '../actions/musicPlayerActions';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from '../containers/Dashboard'
import LoadingScreen from '../components/LoadingScreen';

class MusicPlayerContainer extends Component {
    constructor(props){
        super(props);
    this.state = {
        loadingState: "Loading",
        spotifyAccessToken: this.props.token,
        spotifyDeviceId: "",
        spotifyPlayerConnected: false,
        spotifyPlayerReady: false,
        spotifyPlayer: undefined
    };
    }

    componentDidMount() {
        loadSpotifyScript(this.spotifySDKCallback)
            }

       spotifySDKCallback = () => {
             window.onSpotifyWebPlaybackSDKReady = () => {

             let { Player } = window.Spotify;        
                const spotifyPlayer = new Player({
                    name: 'React Spotify Player',
                    getOAuthToken: cb => {
                        cb(this.props.state.token);
                    }
                });
                spotifyPlayer.addListener('player_state_changed', ({
                    position,
                    duration,
                    track_window: { current_track }
                  }) => {
                    this.props.changeTrackerSong(current_track)
                  });
                this.setState({
                    loadingState: "Loaded",
                    spotifyPlayer
                }, () => {
                    this.connectToPlayer();
                });
            }
         }
         
         connectToPlayer = () => {
            if (this.state.spotifyPlayer) {
                this.state.spotifyPlayer.addListener('ready', ({device_id}) => {
                    console.log('Ready with Device ID', device_id);
                    this.setState({
                        loadingState: "Player Ready",
                        spotifyDeviceId: device_id,
                        spotifyPlayerReady: true
                    }, () => {
                      this.notifyConnected()
                          
                    });
                });
                this.state.spotifyPlayer.connect().then(success => {
                    if (success) {
                      console.log('The Web Playback SDK successfully connected to Spotify!');
                    }})}}

        notifyConnected = () => {
            this.props.addPlayer(this.state.spotifyPlayer)
            this.props.addDeviceID(this.state.spotifyDeviceId)
        }

    render(
    ){
        return(  
        <div>    
            {this.state.spotifyDeviceId && this.state.spotifyPlayer ? ( <div>
                <Router>  <Redirect to="/dashboard" />
          <Route exact path='/dashboard' render={routerProps => <Dashboard/> } /></Router></div>  
      ) : (<LoadingScreen/>)}
     </div> 
     )
    }
}


const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addPlayer: (player) => dispatch(addPlayer(player)),
    addDeviceID: (deviceid) => dispatch(addDevice(deviceid)),
    changeTrackerSong: (song) => dispatch(changeTrackerSong(song))

 })
  
 export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerContainer)
