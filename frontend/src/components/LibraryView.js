import React, { Component} from 'react';
import { addSelectedPlaylist, getPlaylist, getUser, updatePlaylist, addUserToState} from '../services/localapi';
import { connect } from 'react-redux'
import SongResultExtended from '../components/SongResultExtended'

class LibraryView extends Component {

    state = {
     seen: false
    }
    
      handleOnChange(event) {
        this.setState({
          text: event.target.value,
        });
      }


      componentDidUpdate(prevProps) {
        if (this.props.state.user !== prevProps.state.user){
          getPlaylist(this.props.state.user.playlists[0].id).then((playlist) => {
              this.props.addSelectedPlaylist(playlist)}) 
      }
      }
      
      componentDidMount() {
        getPlaylist(this.props.state.user.playlists[0].id).then((playlist) => {
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

       changePlaylist = (newName, image, playlist_id) => {
        updatePlaylist(newName, image, playlist_id).then((playlist) => {
         this.props.addSelectedPlaylist(playlist)
          this.props.getUser(this.props.state.user.id)       
        })
      }
      

    render(){
    
            return(
              
                <div>

                  
                  <div className="TopHalfPlaylist">
              
                    <img className="PlaylistImage"  src={this.props.state.selectedPlaylist.image} alt="SpotifyLogo"></img> 
                    {this.props.state.selectedPlaylist ? 

                    (<div>
                    <div className="PlaylistNameTitle" > {this.props.state.selectedPlaylist.name}</div>

                    <div className="UsernameTag"> {this.props.state.user.display_name}</div></div>) : (                    <div className="PlaylistNameTitle"> {"Loading"}</div>)}

                  </div>
                  {this.props.state.selectedPlaylist.playlist_songs ? 
                    (
                  <div className="BottomHalfPlaylist">
                  <div>
                   <SongResultExtended extrabutton="None" songs={this.props.state.selectedPlaylist.playlist_songs}/>
                   </div>
                  <div className="TablePlaylistContainer">
                  <table className="table2 table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="20px">#</th>
                      <th scope="col" width="510px">Title</th>
                      <th scope="col" width="320px">Album</th>
                      <th scope="col" width="330px">Date Added</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    </tbody>
                    </table>
                    </div>
                    
                  </div>

           
             ) : (<div>{"Still loading..."}</div>)}
             </div>
    )
    }
}

const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addSelectedPlaylist: (playlist) => dispatch(addSelectedPlaylist(playlist)),
    addUserToState: (user) => dispatch(addUserToState(user)),
    getUser: (user) => dispatch(getUser(user))
 })

export default connect(mapStateToProps, mapDispatchToProps)(LibraryView);