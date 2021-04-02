import React, { Component} from 'react';
import Song from './Song'
import { connect } from 'react-redux'
import {startPlayback} from '../actions/musicPlayerActions'
import {turnOnMusic} from '../actions/musicPlayerActions'
import {turnOffMusic} from '../actions/musicPlayerActions'
import {turnOffPause} from '../actions/musicPlayerActions'
import {turnOnPause} from '../actions/musicPlayerActions'
import {pauseTrack} from '../actions/musicPlayerActions'

class SongResult extends Component {
    state = {
        // open: true
        songs: this.props.songs
       }
    renderSongs = () => this.state.songs.map((song, index) => <Song key={song.id} index={index} song ={song} callPlayback={this.callPlayback} />) 


    callPlayback = (event) => {
        console.log(event.target.id)
        console.log(event.target.name)

        //console.log(this.state.open)
       if(!this.props.state.playbackOn){
        startPlayback(event.target.name, this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay())
    
      this.props.songs.forEach(function (song) {
            song.open = false;
          })
        let selectedElement = this.props.songs.splice(event.target.id, 1)
        selectedElement[0].open = true;
       this.props.songs.splice(event.target.id, 0, selectedElement[0])   
       this.setState({songs: this.props.songs})  
        }
      //   else if(this.props.state.playbackOn === true){
      //       //resume
      //   }
        else if(!this.props.state.playbackPaused){
           pauseTrack(this.props.state.deviceID, this.props.state.token).then(this.changeStatesPause())
           this.props.songs.forEach(function (song) {
            song.open = false;
          })
        //let selectedElement = this.props.songs.splice(event.target.id, 1)
       // selectedElement[0].open = false;
      // this.props.songs.splice(event.target.id, 0, selectedElement[0])   
       this.setState({songs: this.props.songs})  
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