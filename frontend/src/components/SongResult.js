import React, { Component} from 'react';
import Song from './Song'
import { connect } from 'react-redux'
import {startPlayback, pauseTrack, eraseTrackerSong, resumePlayback} from '../actions/musicPlayerActions'
import {
  BrowserRouter as Router, Route,
  NavLink
} from "react-router-dom";

import SeeMoreSongsView from './SeeMoreSongsView'

class SongResult extends Component {
    state = {
        selectedElement: "empty",
        songs: this.props.songs,
        currentSong: "empty"
       }
    renderSongs = () => this.props.songs.map((song, index) => <Song key={index} index={index} song ={song} user={this.props.state.user} callPlayback={this.callPlayback} />) 

    componentDidUpdate(prevProps) {
      if (this.props.songs !== prevProps.songs){
        this.setState(state => ({ songs: this.props.songs }))
      }
      if(prevProps.state.changeFromTracker !== this.props.state.changeFromTracker){
        this.props.songs.forEach(function (song) {
          song.open = false;
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
        this.props.songs.forEach(function (song) {
          song.open = false;
        })
      selectedElement.open = true;
     this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
     this.setState({songs: this.props.songs, selectedElement: selectedElement})
      }
      else if (this.props.state.playbackOn){
        let selectedElement = this.props.songs.splice(savedInfo.target.id, 1)[0]

        this.props.startPlayback(savedInfo.target.name, this.props.state.deviceID, this.props.state.token)
          this.props.songs.forEach(function (song) {
            song.open = false;
          })
        selectedElement.open = true;
       this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
       this.setState({songs: this.props.songs, selectedElement: selectedElement})
        }

      else if(!this.props.state.playbackPaused){
         this.props.pauseTrack(this.props.state.deviceID, this.props.state.token)
         this.props.songs.forEach(function (song) {
          song.open = false;
        })
    }
    this.setState({songs: this.props.songs, currentSong: savedInfo.target.id})  

   }

   callPlaybackOnSameSong = (savedInfo) => {
    if(!this.props.state.playbackOn && this.props.state.playbackPaused){
      let selectedElement = this.props.songs.splice(savedInfo.target.id, 1)[0]

      this.props.resumePlayback(this.props.state.deviceID, this.props.state.token)
        this.props.songs.forEach(function (song) {
          song.open = false;
        })
      selectedElement.open = true;
     this.props.songs.splice(savedInfo.target.id, 0, selectedElement)   
     this.setState({songs: this.props.songs, selectedElement: selectedElement})
      }
      else if(!this.props.state.playbackPaused){
         this.props.pauseTrack(this.props.state.deviceID, this.props.state.token)
         this.props.songs.forEach(function (song) {
          song.open = false;
        })
     this.setState({songs: this.props.songs, selectedElement: "empty"})  
    }
   }


  

  
    render(){

        return(<div className="SongResult">
            <h2 className="TitleSection">Songs</h2>
            {this.props.searchId ? 
            (<NavLink className="SeeMore" to={"/SeeMoreSongs"}>SEE ALL</NavLink>) :
           ( <NavLink className="SeeMore" to={"/SeeMoreSongs/Recent"}>SEE ALL</NavLink>)}
            
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
  startPlayback: (spotifyuri, deviceID, token) => dispatch(startPlayback(spotifyuri, deviceID, token)),
   resumePlayback: (deviceID, token) => dispatch(resumePlayback(deviceID, token)),
   pauseTrack: (deviceID, token) => dispatch(pauseTrack(deviceID, token)),
   eraseTrackerSong: () => dispatch(eraseTrackerSong())    
})

export default connect(mapStateToProps, mapDispatchToProps)(SongResult)   