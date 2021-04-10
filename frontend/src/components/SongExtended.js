import React, { Component} from 'react';
import { getUser, addUserToState, addSelectedPlaylist, deleteSong, deletePlaylistSong} from '../services/localapi.js'
import { connect } from 'react-redux'

const imagesPath = {
    play: "https://www.freeiconspng.com/uploads/play-button-icon-png-0.png",
    pause: "https://i.pinimg.com/originals/e5/96/0e/e5960e813b505af997f745cd5f5e23e9.png"
  }

class SongExtended extends Component {


    state = {
       song: this.props.song,
       key: this.props.key,
       open: this.props.open,
       seen: false
      }

      toggleImage = () => {
      this.setState(state => ({ open: !this.props.song.open }))
      }

       removePlaylistFromSong = () => {
         console.log(this.props)
        deletePlaylistSong(this.props.songplaylist.id).then((song) => {
          this.props.getUser(this.props.state.user.id)
           })
       }

      removeSongFromLibrary = () => {
        deleteSong(this.props.song.id).then((data) => {
          this.props.getUser(this.props.state.user.id)
        })
      }

    getImageName = () => this.props.song.open ? 'pause' : 'play'
     
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

       convertDateTime = (date) => {
        let dateObj = new Date(date).toString();
        let DateArray = dateObj.split(" ")
        let month = DateArray[1]
        let day = DateArray[2]
        let year = DateArray[3]
        let DateString = month + " " + day + ", " + year
         return DateString
         }

      
         
    

    render(){
    const imageName = this.getImageName();

        return(
          <div>
        <div className="SongDivWrapper2">     

        <div className="SongDiv2">
        <h4 className="IndexExtended">{this.props.index + 1}</h4>
         <img className="SongAlbumImageExtended" src={`${this.props.song.album.images[0].url}`} alt="new"/>
         <img className="SongAlbumImagePlayExtended" id={this.props.index} name={this.props.song.uri} src={imagesPath[imageName]} onClick={this.props.callPlayback} alt="new"/>
         <h4 className="SongNameExtended">{this.props.song.name}</h4>
         <h4 className="SongArtistExtended">{this.props.song.artists[0].name}</h4>
         <h4 className="AlbumNameExtended">{this.props.song.name}</h4>
         <h4 className="DateAddedExtended">{this.convertDateTime(this.props.song.created_at)}</h4>
         <h4 className="SongTimeExtended">{this.convertDuration(this.props.song.duration_ms)}</h4>
         <div className="dropdown4">
                <img className="ArrowIcon4" src="https://cdn4.iconfinder.com/data/icons/simple-lines-2/32/More_Functions_Menu_Horizontal_Dots_Hidden-512.png" alt="new" tabIndex="1" ></img>
                                <div className="dropdown-content4">
                               <a onClick={this.removeSongFromLibrary}> Remove from Library</a>
                                 <a onClick={this.removePlaylistFromSong}> Remove from Playlist</a>
                            </div>
                      
                    </div>
                    
         </div>
         </div>
         </div>
      )}  
}

const mapStateToProps = state => {
  return {state} 
}

const mapDispatchToProps = dispatch => ({
  addUserToState: (user) => dispatch(addUserToState(user)),
  addSelectedPlaylist: (playlist) => dispatch(addSelectedPlaylist(playlist)),
  getUser: (user) => dispatch(getUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongExtended);