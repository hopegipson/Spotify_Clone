import React, { Component} from 'react';
import {loadSpotifyScript} from '../actions/musicPlayerActions'
import { connect } from 'react-redux';
import { addPlayer } from '../actions/musicPlayerActions';
import { addDevice } from '../actions/musicPlayerActions';
import {startPlayback} from '../actions/musicPlayerActions'
import {turnOnMusic} from '../actions/musicPlayerActions'
import {turnOffPause} from '../actions/musicPlayerActions'

class MusicPlayerContainer extends Component {
    constructor(props){
        super(props);
    this.state = {
        loadingState: "Loading",
        spotifyAccessToken: this.props.token,
        spotifyDeviceId: "",
        spotifyPlayerConnected: false,
        spotifyPlayerReady: false,
        spotifySDKLoaded: false,
        spotifyPlayer: undefined
      //  playbackOn: false,
      //  playbackPaused: false
    };
    }


    componentDidMount() {
        loadSpotifyScript(this.spotifySDKCallback)
            }

   

       spotifySDKCallback = () => {
        window.onSpotifyWebPlaybackSDKReady = () => {

        let { Player } = window.Spotify;
        console.log(Player)
        
                const spotifyPlayer = new Player({
                    name: 'React Spotify Player',
                    getOAuthToken: cb => {
                        cb(this.props.token);
                    }
                });
                console.log(spotifyPlayer)
                this.setState({
                    loadingState: "Loaded",
                    spotifyPlayer
                }, () => {
                    this.connectToPlayer();
                });
            }
         }
         
         connectToPlayer = () => {
             console.log(this.state)
            if (this.state.spotifyPlayer) {
                this.state.spotifyPlayer.addListener('ready', ({device_id}) => {
                    console.log('Ready with Device ID', device_id);
                    this.setState({
                        loadingState: "Player Ready",
                        spotifyDeviceId: device_id,
                        spotifyPlayerReady: true
                    }, () => {
                        this.notifyConnected();
                    });
                });
                this.state.spotifyPlayer.connect()
            }
        }

        // changeStates = () => {
        //     this.props.turnOnMusic()
        //     this.props.turnOffPause()
        //     console.log("worked")
        // }

        // startPlayback = (spotify_uri) => {
        //     fetch("https://api.spotify.com/v1/me/player/play?" +
        //         "device_id=" + this.state.spotifyDeviceId, {
        //         method: 'PUT',
        //         body: JSON.stringify({uris: [spotify_uri]}),
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${this.state.spotifyAccessToken}`
        //         }
        //     }).then(() => {
        //             this.setState({
        //                 loadingState: "Playback started",
        //                 playbackOn: true, playbackPaused: false
        //             });
        //             console.log("Playback started", this.state);
        //     })
        // };

        notifyConnected = () => {
            this.props.addPlayer(this.state.spotifyPlayer)
            this.props.addDeviceID(this.state.spotifyDeviceId)
            console.log(this.state)
            console.log(this.props)

        }

        // <button onClick={() => {
        //     if (!this.state.playbackOn) {
        //         this.startPlayback(this.props.playingRecordingId);
        //     } else {
        //         if (this.state.playbackPaused) {
        //             this.resumePlayback();
        //         }
        //     }
        // }}>Try out</button>
    
    render(
    ){
        return(<div>
            <button onClick={() => {
                            console.log(this.props.state.player)
                            startPlayback(this.props.playingRecordingId, this.props.state.deviceID, this.props.state.token).then(this.changeStates());
                    }}>Try out</button>
     </div>  )
    }
}

const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addPlayer: (player) => dispatch(addPlayer(player)),
    addDeviceID: (deviceid) => dispatch(addDevice(deviceid))
    // turnOnMusic: () => dispatch(turnOnMusic(true)),
    // turnOffPause: () => dispatch(turnOffPause(false))
 })
  
 export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerContainer)
