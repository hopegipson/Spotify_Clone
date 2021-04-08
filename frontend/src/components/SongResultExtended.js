import React, { Component} from 'react';
import SongExtended from './SongExtended'
import { connect } from 'react-redux'
import {startPlayback, turnOnMusic, turnOffMusic, turnOffPause, turnOnPause, pauseTrack, changeTrackerSong, eraseTrackerSong} from '../actions/musicPlayerActions'

class SongResultExtended extends Component {
    state = {
        selectedElement: "empty",
        songs: this.props.songs
       }
    renderSongs = () => this.props.songs.map((songplaylist, index) => <SongExtended key={songplaylist.song.id} index={index} song ={songplaylist.song} songplaylist ={songplaylist}  user={this.props.state.user} callPlayback={this.callPlayback} />) 

    componentDidUpdate(prevProps) {
      if (this.props.songs !== prevProps.songs){
        this.setState(state => ({ songs: this.props.songs }))
      }
    }

    callPlayback = (event) => {

        if(!this.props.state.playbackOn){
        let selectedElement = this.props.songs.splice(event.target.id, 1)[0]

         startPlayback(event.target.name, this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay(selectedElement.song))
           this.props.songs.forEach(function (songplaylist) {
             songplaylist.song.open = false;
           })
         selectedElement.song.open = true;
        this.props.songs.splice(event.target.id, 0, selectedElement)   
        this.setState({songs: this.props.songs, selectedElement: selectedElement})
         }
         else if(!this.props.state.playbackPaused){
            pauseTrack(this.props.state.deviceID, this.props.state.token).then(this.changeStatesPause())
           this.props.songs.forEach(function (songplaylist) {
            songplaylist.song.open = false;
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

        return(<div className="SongResultExtended">
            <div className="InsideSongResultExtended">
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
   eraseTrackerSong: () => dispatch(eraseTrackerSong())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SongResultExtended) 