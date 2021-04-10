import React, { Component} from 'react';
import {loadSpotifyScript} from '../actions/musicPlayerActions'
import { connect } from 'react-redux';
import { addPlayer } from '../actions/musicPlayerActions';
import { addDevice } from '../actions/musicPlayerActions';


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
                    console.log('Currently Playing', current_track);
                    console.log('Position in Song', position);
                    console.log('Duration of Song', duration);
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
        return(<div>        
     </div>  )
    }
}

const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addPlayer: (player) => dispatch(addPlayer(player)),
    addDeviceID: (deviceid) => dispatch(addDevice(deviceid))
 })
  
 export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerContainer)
