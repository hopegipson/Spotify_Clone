import React, { Component} from 'react';
import { connect } from 'react-redux'
import {getCurrentlyPlaying, resumePlayback, pausePlayback, startPlayback} from '../actions/musicPlayerActions'

const imagesPath = {
  play: "https://www.freeiconspng.com/uploads/play-button-icon-png-0.png",
  pause: "https://i.pinimg.com/originals/e5/96/0e/e5960e813b505af997f745cd5f5e23e9.png"
}

class SongTracker extends Component {

    state = {
        progress_ms: 0,
        duration_ms: 0,
        width: 0
       // open: false
       }

       toggleImage = () => {
         if (!this.props.state.playbackOn && !this.props.state.playbackPaused){
           //start playback
           //change your start playback, pause playback, resume playback to have dispatch state stuff at the same time

         }
         else if (this.props.state.playbackPaused && !this.props.state.playbackOn){
           //resume

         }
         else if(!this.props.state.playbackOn && !this.props.state.playbackPaused){
           //pause playback

         }
        }

    convertDuration = (milliseconds) => {
        let  minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        if (seconds.toString().length === 1){
            seconds = `0${seconds}`
        }
        return `${minute}:${seconds}`
       }


    componentDidMount() {
       this.interval = setInterval(() => this.tick(), 500);
      }

      tick = () => {
         if(this.props.state.playbackOn === true){
        this.getCurrentlyPlayingS(this.props.state.token);  
         }
         
      }

     // getImageName = () => this.state.open ? 'pause' : 'play'


      
      getCurrentlyPlayingS = (token) => {
          getCurrentlyPlaying(token).then((data) => {
                    this.setState({
                        data: data,
                      item: data.item,
                      duration_ms: data.item.duration_ms,
                      is_playing: data.is_playing,
                      width: ((data.progress_ms * 100 / data.item.duration_ms)*6),
                      progress_ms: data.progress_ms
                    })
          
            }
          )
    }

    // getInitialImageState = () => {
    //   if (!this.props.state.PlaybackOn){
    //     this.setState(state => ({ open: false}))
    //   }
    //   else if(this.props.state.PlaybackOn){
    //     this.setState(state => ({ open: true}))
    //   }
    // }
   
    
   

    render(){
        const progressBarStyles =  {
            width: (this.state.width) + 'px'
            
          };

          const progressBarStyles2 = {
            width: 600 + 'px'
          };

       //   const imageName = this.getImageName();

            return(
                <div>
                 {this.props.state.songPlaying  ? 
            (<div><img className ="FooterImage"src={`${this.props.state.songPlaying.album.images[0].url}`} alt="new"/> 
            <div className="FooterSongDiv">
            <div className="FooterSongTitle">{this.props.state.songPlaying.name}</div>
            <div className="FooterSongArtist">{this.props.state.songPlaying.artists[0].name}</div></div>
             <div >
            

                 <div className="timeProgress">{this.convertDuration(this.state.progress_ms)} </div>
                 <div className="timeDuration">{this.convertDuration(this.state.duration_ms)} </div>

            <div className="progress__bar2" style={progressBarStyles2} />
            <div className="progress__bar" style={progressBarStyles} /></div>
      </div>
        )
            
            : ( <div><img className="FooterImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/>
            <div className="FooterSongDiv">
            <div className="FooterSongTitle">{"No song currently playing"}</div> 
            <div className="FooterSongArtist">{"Select a song to play"}</div></div>
            <div className="progress__bar2" style={progressBarStyles2} />
            </div>)}

            {this.props.state.playbackOn  ? ( <img className="BottomFooterImage" src={imagesPath["pause"]} onClick={this.toggleImage} alt="new"/>): ( <img className="BottomFooterImage" src={imagesPath["play"]} onClick={this.toggleImage} alt="new"/> )}
              </div>
            )
    }
}
const mapStateToProps = state => {
    return {
      state
    }
  }

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SongTracker)   
