import React, { Component} from 'react';
import PlaylistPopUp from '../components/PlaylistPopUp'
import { postSong, getSongs, changeSong, postSongWithTwo, getUser, addUserToState} from '../services/localapi.js'
import { connect } from 'react-redux'
import MessagePopUp from '../components/MessagePopUp'

const imagesPath = {
    play: "https://www.freeiconspng.com/uploads/play-button-icon-png-0.png",
    pause: "https://i.pinimg.com/originals/e5/96/0e/e5960e813b505af997f745cd5f5e23e9.png"
  }

class SongSeeMore extends Component {


    state = {
       song: this.props.song,
       key: this.props.key,
       open: this.props.open,
       seen: false,
       message: false,
       messageContent: ""
      }

      toggleImage = () => {
      this.setState(state => ({ open: !this.props.open }))
      }

      addSongToLibrary = () => {
        this.checkifSongExists(this.props.state.user.playlists[0].id, this.props.state.user.playlists[0].id, this.props.state.user.playlists[0].name)
      }

      addSongToPlaylist = (playlist_id, playlist_name) => {
        this.checkifSongExists(playlist_id, this.props.state.user.playlists[0].id, playlist_name)
      }

      checkifSongExists = (playlist_id, musiclibrary_id, playlist_name) => {
        let value = getSongs()
        if (value)
        {value.then(json => this.lookForSong(json, this.state.song.uri, playlist_id, musiclibrary_id, playlist_name))}
        else{
          this.CheckifPlaylistOrLibraryCreate(playlist_id, musiclibrary_id, playlist_name)
        }       
    }

    lookForSong = (songs, songuri, playlist_id, musiclibrary_id, playlist_name) => {
      let selectedSong = songs.filter(function(song) { if (song.uri === songuri)  return song})[0]
      if (!selectedSong){
        this.CheckifPlaylistOrLibraryCreate(playlist_id, musiclibrary_id, playlist_name)
        }
        else{
          if (playlist_id === musiclibrary_id){
            this.toggleMessageLibrary()
          }
          else{
         changeSong(selectedSong.id, playlist_id).then(() => {
          this.props.getUser(this.props.state.user.id)   
          this.toggleMessage(playlist_name)             
        })
      }
        }
   }

   CheckifPlaylistOrLibraryCreate = (playlist_id, musiclibrary_id, playlist_name) => {
     if (playlist_id === musiclibrary_id){
      postSong(this.state.song, playlist_id).then((data) => {
        this.props.getUser(this.props.state.user.id)
        this.toggleMessage(playlist_name)       
       })
     }
     else{
       postSongWithTwo(this.state.song, playlist_id, musiclibrary_id).then((data) => {
        this.props.getUser(this.props.state.user.id)    
        this.toggleMessage(playlist_name)          
       })} }

  

      togglePop = () => {
        this.setState({
         seen: !this.state.seen
        });
       };

       toggleMessage = (name) => {
        this.setState({
         message: !this.state.message,
         messageContent: `${this.state.song.name} has been successfully added to ${name}`
        });
       };

       toggleMessageLibrary = () => {
       this.setState({
        message: !this.state.message,
        messageContent: `${this.state.song.name} is already in your Library`
       });
      };

       toggleMessageClosed = () => {
        this.setState({
          message: false,
          messageContent: ""
        })
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
          <div>
          <div>
          {this.state.seen ? <PlaylistPopUp user={this.props.state.user} toggle={this.togglePop} addSongToPlaylist={this.addSongToPlaylist} song={this.state.song} /> : null}
        </div>

        <div>
          {this.state.message ? <MessagePopUp messageContent={this.state.messageContent} toggleMessageClosed={this.toggleMessageClosed}  /> : null}
        </div>
        <div className="SongDivWrapper2">     

<div className="SongDiv2">
<h4 className="IndexExtended">{this.props.index + 1}</h4>
 <img className="SongAlbumImageExtended" src={`${this.props.song.album.images[0].url}`} alt="new"/>
 <img className="SongAlbumImagePlayExtended" id={this.props.index} name={this.props.song.uri} src={imagesPath[imageName]} onClick={this.props.callPlayback} alt="new"/>
 <h4 className="SongNameExtendedSeeMore">{this.props.song.name}</h4>
 <h4 className="AlbumNameExtended">{this.props.song.artists[0].name}</h4>
 <h4 className="DateAddedExtended">{this.props.song.album.name}</h4>
 <h4 className="SongTimeExtended">{this.convertDuration(this.props.song.duration_ms)}</h4>
         <div className="dropdown4">
                <img className="ArrowIcon4" src="https://cdn4.iconfinder.com/data/icons/simple-lines-2/32/More_Functions_Menu_Horizontal_Dots_Hidden-512.png" alt="new" tabIndex="1" ></img>
                                <div className="dropdown-content4">
                               <a  onClick={this.addSongToLibrary}> Add to Library</a>
                                 <a  onClick={this.togglePop}> Add to Playlist</a>
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
  getUser: (user) => dispatch(getUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongSeeMore);