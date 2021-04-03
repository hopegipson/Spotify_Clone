import React, { Component} from 'react';
import Song from './Song'
import { connect } from 'react-redux'
import {startPlayback, turnOnMusic, turnOffMusic, turnOffPause, turnOnPause, pauseTrack, changeTrackerSong, eraseTrackerSong} from '../actions/musicPlayerActions'

class SongResult extends Component {
    state = {
        selectedElement: "empty",
        songs: this.props.songs
       }
    renderSongs = () => this.state.songs.map((song, index) => <Song key={song.id} index={index} song ={song} callPlayback={this.callPlayback} />) 


    callPlayback = (event) => {

       if(!this.props.state.playbackOn){
        let selectedElement = this.props.songs.splice(event.target.id, 1)[0]

        startPlayback(event.target.name, this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay(selectedElement))
          this.props.songs.forEach(function (song) {
            song.open = false;
          })
        selectedElement.open = true;
       this.props.songs.splice(event.target.id, 0, selectedElement)   
       this.setState({songs: this.props.songs, selectedElement: selectedElement})
        }
        else if(!this.props.state.playbackPaused){
           pauseTrack(this.props.state.deviceID, this.props.state.token).then(this.changeStatesPause())
           this.props.songs.forEach(function (song) {
            song.open = false;
          })
       this.setState({songs: this.props.songs, selectedElement: "empty"})  
      }
   }

   

    changeStatesPause = () => {
      this.props.turnOnPause()
      this.props.turnOffMusic()
      this.props.eraseTrackerSong()
  }

    changeStatesPlay = (songPlaying) => {
      this.props.turnOnMusic()
      this.props.turnOffPause()
      this.props.changeTrackerSong(songPlaying)
  }

    render(){

        return(<div className="SongResult">
            <h2 className="TitleSection">Songs</h2>
            <a className="SeeMore" href="http://google.com">SEE ALL</a>
            <div className="InsideSongResult">
                {this.renderSongs()}
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
   eraseTrackerSong: () => dispatch(changeTrackerSong())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SongResult)   