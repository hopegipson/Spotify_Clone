import React, { Component} from 'react';
import Song from './Song'
import { connect } from 'react-redux'
import {startPlayback, turnOnMusic, turnOffMusic, turnOffPause, turnOnPause, pauseTrack, changeTrackerSong, eraseTrackerSong} from '../actions/musicPlayerActions'

class SongResultRecent extends Component {
    state = {
        selectedElement: "empty",
        songs: this.props.songs
       }
    renderSongs = () => this.props.songs.map((songplaylist, index) => <Song key={index} index={index} song ={songplaylist.track} songplaylist ={songplaylist}  user={this.props.state.user} callPlayback={this.callPlayback} />) 


    callPlayback = (event) => {
        
        
        if(!this.props.state.playbackOn){
        let selectedElement = this.props.songs.splice(event.target.id, 1)[0]

         startPlayback(event.target.name, this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay(selectedElement.track))
           this.props.songs.forEach(function (songplaylist) {
             songplaylist.track.open = false;
           })
         selectedElement.track.open = true;
        this.props.songs.splice(event.target.id, 0, selectedElement)   
        this.setState({songs: this.props.songs, selectedElement: selectedElement})
         }
         else if(!this.props.state.playbackPaused){
            pauseTrack(this.props.state.deviceID, this.props.state.token).then(this.changeStatesPause())
           this.props.songs.forEach(function (songplaylist) {
            songplaylist.track.open = false;
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

        return(<div className="SongResultRecent">
             <h4 className="TitleSection">{"Recently Played Songs"}</h4>

            <div className="InsideSongResultRecent">
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

export default connect(mapStateToProps, mapDispatchToProps)(SongResultRecent) 