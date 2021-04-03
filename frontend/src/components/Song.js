import React, { Component} from 'react';

const imagesPath = {
    play: "https://lh3.googleusercontent.com/proxy/RiGzAnMYj3wChgCoBWAARaHuuPyn_dsP7cn1NCvlkm6PsHQKw8xqLOxuw9VXqwCrY9jrohEHTTweMFGMNSNUwrPWVHsIeR78rlnwJbjVw3E4977JVgROYVSIBv00K8bNvQv6gQ",
    pause: "https://icon-library.com/images/pause-icon-transparent/pause-icon-transparent-24.jpg"
  }

export default class Song extends Component {


    state = {
       song: this.props.song,
       key: this.props.key,
       open: this.props.open
      }

      toggleImage = () => {
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

    render(){
    const imageName = this.getImageName();

        return(
        <div className="SongDivWrapper">        
        <div className="SongDiv">
         <img className="SongAlbumImage" src={`${this.props.song.album.images[0].url}`} alt="new"/>
         <img className="SongAlbumImagePlay" id={this.props.index} name={this.props.song.uri} src={imagesPath[imageName]} onClick={this.props.callPlayback} alt="new"/>
         <h4 className="SongName">{this.props.song.name}</h4>
         <h4 className="SongArtist">{this.props.song.artists[0].name}</h4>
         <h4 className="SongTime">{this.convertDuration(this.props.song.duration_ms)}</h4>
         </div>
         </div>
      )}  
}