import React, { Component} from 'react';
import PlaylistPopUp from '../components/PlaylistPopUp'
import { postSongtoLibrary } from '../services/localapi.js'

const imagesPath = {
    play: "https://www.freeiconspng.com/uploads/play-button-icon-png-0.png",
    pause: "https://i.pinimg.com/originals/e5/96/0e/e5960e813b505af997f745cd5f5e23e9.png"
  }

export default class Song extends Component {


    state = {
       song: this.props.song,
       key: this.props.key,
       open: this.props.open,
       seen: false
      }

      toggleImage = () => {
      this.setState(state => ({ open: !this.props.open }))
      }

      addToLibarary = () => {
        console.log(this.state.song)
       // postSongtoLibrary().then((data) => {})
        console.log("addtoLibrary")
      }

      togglePop = () => {
        console.log("here")
        this.setState({
         seen: !this.state.seen
        });
       };


    
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
                         
         <div>
          {this.state.seen ? <PlaylistPopUp toggle={this.togglePop} /> : null}
        </div>     
        <div className="SongDiv">
         <img className="SongAlbumImage" src={`${this.props.song.album.images[0].url}`} alt="new"/>
         <img className="SongAlbumImagePlay" id={this.props.index} name={this.props.song.uri} src={imagesPath[imageName]} onClick={this.props.callPlayback} alt="new"/>
         <h4 className="SongName">{this.props.song.name}</h4>
         <h4 className="SongArtist">{this.props.song.artists[0].name}</h4>
         <h4 className="SongTime">{this.convertDuration(this.props.song.duration_ms)}</h4>
         <div className="dropdown2">
                <img class="ArrowIcon2" src="https://cdn4.iconfinder.com/data/icons/simple-lines-2/32/More_Functions_Menu_Horizontal_Dots_Hidden-512.png" alt="new" tabindex="1" ></img>
                                <div class="dropdown-content2">
                               <a onClick={this.addToLibarary}> Add to Library</a>
                                 <a onClick={this.togglePop}> Add to Playlist</a>
                            </div>
                      
                    </div>
                    
         </div>
         </div>
      )}  
}