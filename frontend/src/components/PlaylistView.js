import React, { Component} from 'react';
import { addSelectedPlaylist, getPlaylist, updatePlaylist, getUser, addUserToState} from '../services/localapi';
import { connect } from 'react-redux'
import PlaylistEditPopUp from '../components/PlaylistEditPopUp'

class PlaylistView extends Component {

    state = {
     seen: false
    }
    
      handleOnChange(event) {
        this.setState({
          text: event.target.value,
        });
      }

      togglePop = () => {
        console.log(this.state.seen)
        this.setState({
         seen: !this.state.seen
        });
       };


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

       changePlaylist = (newName, image, playlist_id) => {
        updatePlaylist(newName, image, playlist_id).then((playlist) => {
         this.props.addSelectedPlaylist(playlist)
          getUser(this.props.state.user.id).then((user) => {
            this.props.addUserToState(user)})         
        })
         // getUser again and then update state
      }




    render(){
    
            return(
              
                <div>
                     <div>
                    {this.state.seen ? <PlaylistEditPopUp user={this.props.state.user} playlist={this.props.state.selectedPlaylist} toggle={this.togglePop} changePlaylist={this.changePlaylist} /> : null}
                   </div>  
                  
                  <div className="TopHalfPlaylist">
              
                    <img className="PlaylistImage" src={this.props.state.selectedPlaylist.image} alt="SpotifyLogo"></img> 
                    <div className="PlaylistTag"> PLAYLIST</div>
                    {this.props.state.selectedPlaylist ? 

                    (<div>
                    <div className="PlaylistNameTitle" onClick={this.togglePop}> {this.props.state.selectedPlaylist.name}</div>

                    <div className="UsernameTag"> {this.props.state.user.display_name}</div></div>) : (                    <div className="PlaylistNameTitle"> {"Loading"}</div>)}

                  </div>
                  {this.props.state.selectedPlaylist.playlist_songs ? 
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
    addUserToState: (user) => dispatch(addUserToState(user))

 })

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistView);
