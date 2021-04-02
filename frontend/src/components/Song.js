import React, { Component} from 'react';
import { connect } from 'react-redux'
import {startPlayback} from '../actions/musicPlayerActions'
import {turnOnMusic} from '../actions/musicPlayerActions'
import {turnOffPause} from '../actions/musicPlayerActions'
import {turnOnPause} from '../actions/musicPlayerActions'
import {pauseTrack} from '../actions/musicPlayerActions'

const imagesPath = {
    play: "https://lh3.googleusercontent.com/proxy/oQdT8TM1NuhkfvAqp9i2nlSe82TH0ueb65z9hOGHwvO7Z7OKHiioA3SaNVSPeWE1VGUUbWFhxl4vUZLcA43C8MWaDn5TVu-ySR5pOrWIWYL50YZTES95nIZvmUg5",
    pause: "https://icon-library.com/images/pause-icon-transparent/pause-icon-transparent-24.jpg"
  }

export default class Song extends Component {


    state = {
       // open: true
       song: this.props.song,
       key: this.props.key,
       open: this.props.open
      }

      toggleImage = () => {
      // this.setState(state => ({ open: !state.open }))
      this.setState(state => ({ open: !this.props.open }))
      }

      componentDidUpdate(prevProps) {
        if(prevProps.open !== this.props.open) {
          this.setState({open: this.props.open});
        }
      }

      toggleImage = () => {
        this.setState(state => ({ open: !this.props.open }))
      }
    
      getImageName = () => this.state.song.open ? 'pause' : 'play'
     

    //   callPlayback = () => {
    //       this.toggleImage()
    //       console.log(this.state.open)
    //       if(this.state.open === true){
    //       startPlayback(this.props.song.uri, this.props.state.deviceID, this.props.state.token).then(this.changeStatesPlay())
    //       }
    //     //   else if(this.props.state.playbackPaused === true){
    //     //       //resume
    //     //   }
    //       else if(this.state.open === false){
    //         pauseTrack(this.props.state.deviceID, this.props.state.token).then(this.changeStatesPause())
    //     }
    //   }

    //   changeStatesPause = () => {
    //     this.props.turnOnPause()
    // }

    //   changeStatesPlay = () => {
    //     this.props.turnOnMusic()
    //     this.props.turnOffPause()
    //     console.log("worked")
    // }

    convertDuration = (milliseconds) => {
        let  hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        if (seconds.toString().length === 1){
            seconds = `0${seconds}`
        }
        return `${minute}:${seconds}`
       }

    render(){
    const imageName = this.getImageName();

        return(
        <div className="SongDivWrapper">        
        {console.log(imageName)}
        <div className="SongDiv">
         <img className="SongAlbumImage" src={`${this.props.song.album.images[0].url}`} alt="new"/>
         <img className="SongAlbumImage" id={this.props.index} name={this.props.song.uri} src={imagesPath[imageName]} onClick={this.props.callPlayback} alt="new"/>
         <h4 className="SongName">{this.props.song.name}</h4>
         <h4 className="SongArtist">{this.props.song.artists[0].name}</h4>
         <h4 className="SongTime">{this.convertDuration(this.props.song.duration_ms)}</h4>
         </div>
         </div>
      )}  
}

//         <img className="SongAlbumImage" src={imagesPath[imageName]} onClick={this.props.callPlayback} alt="new"/>


// const mapStateToProps = state => {
//     return {
//       state
//     }
//   }

// const mapDispatchToProps = dispatch => ({
//     turnOnMusic: () => dispatch(turnOnMusic(true)),
//     turnOffPause: () => dispatch(turnOffPause(false)),
//     turnOnPause: () => dispatch(turnOnPause(true))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Song)   