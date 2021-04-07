import React, { Component} from 'react';
import { addSelectedPlaylist, getPlaylist} from '../services/localapi';
import { connect } from 'react-redux'

class PlaylistForm extends Component {

    state = {
        text: '',
        playlist: undefined}
    
      handleOnChange(event) {
        this.setState({
          text: event.target.value,
        });
      }

      componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id){
          getPlaylist(this.props.match.params.id).then((playlist) => {
            this.props.addSelectedPlaylist(playlist)}) 
        }
      }
      
      componentWillMount() {
        getPlaylist(this.props.match.params.id).then((playlist) => {
          console.log(playlist)
          this.props.addSelectedPlaylist(playlist)}) 

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

       convertDateTime = (date) => {
      let dateObj = new Date(date).toString();
      let DateArray = dateObj.split(" ")
      let month = DateArray[1]
      let day = DateArray[2]
      let year = DateArray[3]
      let DateString = month + " " + day + ", " + year
       return DateString
       }

      handleOnSubmit(event) {
        event.preventDefault();
        console.log("Submit")
       //changeUser(this.state.text, this.props.user.spotifyid, this.props.user.id).then((user) => {
       // this.props.addUserToState(user)})
        this.setState({
          text: '',
        });
      }


    render(){
    
            return(
              
                <div>
                  <div className="TopHalfPlaylist">
                    <img className="PlaylistImage" src="http://iconsetc.com/icons-watermarks/flat-square-white-on-dark-gray/classica/classica_music-note-2/classica_music-note-2_flat-square-white-on-dark-gray_512x512.png" alt="SpotifyLogo"></img> 
                    <div className="PlaylistTag"> PLAYLIST</div>
                    {this.props.state.selectedPlaylist ? 

                    (<div>
                    <div className="PlaylistNameTitle"> {this.props.state.selectedPlaylist.name}</div>

                    <div className="UsernameTag"> {this.props.state.user.display_name}</div></div>) : (                    <div className="PlaylistNameTitle"> {"Loading"}</div>)}

                  </div>
                  {this.props.state.selectedPlaylist ? 
                    (<div>
                  <div className="BottomHalfPlaylist">
                  <div className="TablePlaylistContainer">
                  <table class="table2 table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="20px">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Album</th>
                      <th scope="col">Date Added</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>

                 {this.props.state.selectedPlaylist.playlist_songs.map(playlistsong => (
                  <tr class="table-active">
                  <th scope="row">1</th>
                  <td>{playlistsong.song.name}</td>
                  <td>{playlistsong.song.album}</td>
                  <td>{this.convertDateTime(playlistsong.created_at)}</td>
                  <td>{this.convertDuration(playlistsong.song.duration_ms)}</td>
                </tr>
              ))} 
                   
                    </tbody>
                    </table>
                    </div>
                    
                  </div>
                  
           
             </div>) : (<div>{"Still loading..."}</div>)}
             </div>
    )
    }
}

const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addSelectedPlaylist: (playlist) => dispatch(addSelectedPlaylist(playlist)),

 })

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
