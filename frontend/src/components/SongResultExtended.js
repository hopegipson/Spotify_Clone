import React, { Component} from 'react';
import SongExtended from './SongExtended'
import { connect } from 'react-redux'
import {startPlayback, pauseTrack, eraseTrackerSong, resumePlayback} from '../actions/musicPlayerActions'

class SongResultExtended extends Component {
    state = {
        selectedElement: "empty",
        songs: this.props.songs,
        currentSong: "empty",
        extrabutton: this.props.extrabutton      }


    renderSongs = () => this.props.songs.map((songplaylist, index) => <SongExtended key={index} index={index} extrabutton={this.props.extrabutton} song ={songplaylist.song} songplaylist ={songplaylist}  user={this.props.state.user} callPlayback={this.callPlayback} />) 

    componentDidUpdate(prevProps) {
      if (this.props.songs !== prevProps.songs){
        this.setState(state => ({ songs: this.props.songs }))
      }
      if(prevProps.state.changeFromTracker !== this.props.state.changeFromTracker){
        this.props.songs.forEach(function (songplaylist) {
          songplaylist.song.open = false;
        })
      }
    }

    callPlayback = (event) => {
      let savedInfo = event
        if (savedInfo.target.id !== this.state.currentSong){
          this.callPlaybackOnNewSong(savedInfo)
        }
        else if (savedInfo.target.id === this.state.currentSong){
         this.callPlaybackOnSameSong(savedInfo)
        }
   }

   callPlaybackOnNewSong = (savedInfo) => {
    if(!this.props.state.playbackOn){
      let selectedElement = this.props.songs.splice(savedInfo.target.id, 1)[0]

       this.props.startPlayback(savedInfo.target.name, this.props.state.deviceID, this.props.state.token)
         this.props.songs.forEach(function (songplaylist) {
           songplaylist.song.open = false;
         })
       selectedElement.song.open = true;
      this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
      this.setState({songs: this.props.songs, selectedElement: selectedElement})
       }
       else if (this.props.state.playbackOn){
        let selectedElement = this.props.songs.splice(savedInfo.target.id, 1)[0]

        this.props.startPlayback(savedInfo.target.name, this.props.state.deviceID, this.props.state.token)
          this.props.songs.forEach(function (songplaylist) {
            songplaylist.song.open = false;
          })
        selectedElement.song.open = true;
       this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
       this.setState({songs: this.props.songs, selectedElement: selectedElement})
        }
       else if(!this.props.state.playbackPaused){
          this.props.pauseTrack(this.props.state.deviceID, this.props.state.token)
         this.props.songs.forEach(function (songplaylist) {
          songplaylist.song.open = false;
        })
    }
    this.setState({songs: this.props.songs, currentSong: savedInfo.target.id})  

   }

   callPlaybackOnSameSong = (savedInfo) => {
    if(!this.props.state.playbackOn && this.props.state.playbackPaused){
      let selectedElement = this.props.songs.splice(savedInfo.target.id, 1)[0]

       this.props.resumePlayback( this.props.state.deviceID, this.props.state.token)
         this.props.songs.forEach(function (songplaylist) {
           songplaylist.song.open = false;
         })
       selectedElement.song.open = true;
      this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
      this.setState({songs: this.props.songs, selectedElement: selectedElement})
       }
       else if(!this.props.state.playbackPaused){
          this.props.pauseTrack(this.props.state.deviceID, this.props.state.token)
         this.props.songs.forEach(function (songplaylist) {
          songplaylist.song.open = false;
        })
     this.setState({songs: this.props.songs})  
    }
   }

    render(){
        return(<div>
        <div className="SongResultExtended">
            <div className="InsideSongResultExtended">
                {this.renderSongs()}
            </div>
        </div>            
      </div>)
    }
}

const mapStateToProps = state => {
    return {
      state
    }
  }

const mapDispatchToProps = dispatch => ({
   startPlayback: (spotifyuri, deviceID, token) => dispatch(startPlayback(spotifyuri, deviceID, token)),
   resumePlayback: (deviceID, token) => dispatch(resumePlayback(deviceID, token)),
   pauseTrack: (deviceID, token) => dispatch(pauseTrack(deviceID, token)),
   eraseTrackerSong: () => dispatch(eraseTrackerSong())
})

export default connect(mapStateToProps, mapDispatchToProps)(SongResultExtended) 