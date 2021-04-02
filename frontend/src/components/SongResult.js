import React, { Component} from 'react';
import Song from './Song'
import { connect } from 'react-redux'
import {startPlayback, turnOnMusic, turnOffMusic, turnOffPause, turnOnPause, pauseTrack} from '../actions/musicPlayerActions'
import SongTracker from './SongTracker'

class SongResult extends Component {
    state = {
        selectedElement: "empty",
        songs: this.props.songs
       }
    renderSongs = () => this.state.songs.map((song, index) => <Song key={song.id} index={index} song ={song} callPlayback={this.callPlayback} />) 


    callPlayback = (event) => {
        console.log(event.target.id)
        console.log(event.target.name)

       if(!this.props.state.playbackOn){
        startPlayback(event.target.name, this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay())
    
      this.props.songs.forEach(function (song) {
            song.open = false;
          })
        let selectedElement = this.props.songs.splice(event.target.id, 1)
        
        selectedElement[0].open = true;
       this.props.songs.splice(event.target.id, 0, selectedElement[0])   
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
  }

    changeStatesPlay = () => {
      this.props.turnOnMusic()
      this.props.turnOffPause()
      console.log("worked")
  }

    render(){
        console.log(this.props)

        return(<div className="SongResult">
            <h2 className="TitleSection">Songs</h2>
            <a className="SeeMore" href="http://google.com">SEE ALL</a>
           {console.log(this.props.songs)}
            <div className="InsideSongResult">
                {this.renderSongs()}
            </div>
            <SongTracker song={this.state.selectedElement}/>

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
    turnOffMusic: () => dispatch(turnOffMusic(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongResult)   