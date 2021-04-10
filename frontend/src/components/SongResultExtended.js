import React, { Component} from 'react';
import SongExtended from './SongExtended'
import { connect } from 'react-redux'
import {startPlayback, turnOnMusic, turnOffMusic, turnOffPause, turnOnPause, pauseTrack, changeTrackerSong, eraseTrackerSong, resumePlayback} from '../actions/musicPlayerActions'

class SongResultExtended extends Component {
    state = {
        selectedElement: "empty",
        songs: this.props.songs,
        currentSong: "empty"
       }
    renderSongs = () => this.props.songs.map((songplaylist, index) => <SongExtended key={index} index={index} song ={songplaylist.song} songplaylist ={songplaylist}  user={this.props.state.user} callPlayback={this.callPlayback} />) 

    componentDidUpdate(prevProps) {
      if (this.props.songs !== prevProps.songs){
        this.setState(state => ({ songs: this.props.songs }))
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

       startPlayback(savedInfo.target.name, this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay(selectedElement.song))
         this.props.songs.forEach(function (songplaylist) {
           songplaylist.song.open = false;
         })
       selectedElement.song.open = true;
      this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
      this.setState({songs: this.props.songs, selectedElement: selectedElement})
       }
       else if(!this.props.state.playbackPaused){
          pauseTrack(this.props.state.deviceID, this.props.state.token).then(this.changeStatesPause())
         this.props.songs.forEach(function (songplaylist) {
          songplaylist.song.open = false;
        })
     this.setState({songs: this.props.songs, currentSong: savedInfo.target.id})  
    }
   }

   callPlaybackOnSameSong = (savedInfo) => {
    if(!this.props.state.playbackOn && this.props.state.playbackPaused){
      let selectedElement = this.props.songs.splice(savedInfo.target.id, 1)[0]

       resumePlayback( this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay(selectedElement.song))
         this.props.songs.forEach(function (songplaylist) {
           songplaylist.song.open = false;
         })
       selectedElement.song.open = true;
      this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
      this.setState({songs: this.props.songs, selectedElement: selectedElement})
       }
       else if(!this.props.state.playbackPaused){
          pauseTrack(this.props.state.deviceID, this.props.state.token).then(this.changeStatesPause())
         this.props.songs.forEach(function (songplaylist) {
          songplaylist.song.open = false;
        })
     this.setState({songs: this.props.songs})  
    }
   }


   

    changeStatesPause = () => {
      this.props.turnOnPause()
      this.props.turnOffMusic()
     // this.props.eraseTrackerSong()
  }

    changeStatesPlay = (songPlaying) => {
      this.props.turnOnMusic()
      this.props.turnOffPause()
     // this.props.changeTrackerSong(songPlaying)
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
    turnOnMusic: () => dispatch(turnOnMusic(true)),
    turnOffPause: () => dispatch(turnOffPause(false)),
    turnOnPause: () => dispatch(turnOnPause(true)),
    turnOffMusic: () => dispatch(turnOffMusic(false)),
   changeTrackerSong: (song) => dispatch(changeTrackerSong(song)),
   eraseTrackerSong: () => dispatch(eraseTrackerSong())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SongResultExtended) 