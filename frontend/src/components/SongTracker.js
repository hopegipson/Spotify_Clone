import React, { Component} from 'react';
import { connect } from 'react-redux'
import {getCurrentlyPlaying} from '../actions/musicPlayerActions'

class SongTracker extends Component {

    state = {
        progress_ms: 0,
        duration_ms: 0,
        width: 0
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
       this.interval = setInterval(() => this.tick(), 1000);
      }

      tick = () => {
         if(this.props.state.playbackOn === true){
        this.getCurrentlyPlayingS(this.props.state.token);  
         }
         
      }

      
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
   
    
   

    render(){
        const progressBarStyles =  {
            width: (this.state.width) + 'px'
            
          };

          const progressBarStyles2 = {
            width: 600 + 'px'
          };

            return(
                <div>
                 {this.props.state.songPlaying ? 
            (<div><img className ="FooterImage"src={`${this.props.state.songPlaying.album.images[0].url}`} alt="new"/> 
            <div className="FooterSongDiv">
            <div className="FooterSongTitle">{this.props.state.songPlaying.name}</div>
            <div className="FooterSongArtist">{this.props.state.songPlaying.artists[0].name}</div></div>
             <div >
                 <div className="timeProgress">{this.convertDuration(this.state.progress_ms)} </div>
                 <div className="timeDuration">{this.convertDuration(this.state.duration_ms)} </div>

            <div className="progress__bar2" style={progressBarStyles2} />
            <div className="progress__bar" style={progressBarStyles} /></div></div>
        )
            
            : ( <div><img className="FooterImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/>
            <div className="FooterSongDiv">
            <div className="FooterSongTitle">{"No song currently playing"}</div> 
            <div className="FooterSongArtist">{"Select a song to play"}</div></div>
            <div className="progress__bar2" style={progressBarStyles2} />
            </div>)}
            
           
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
