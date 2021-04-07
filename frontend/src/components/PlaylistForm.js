import React, { Component} from 'react';
import { addUserToState} from '../services/localapi';
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
          this.updateStateWithPlaylist()
        }
      }
      
      componentWillMount() {
        this.updateStateWithPlaylist()
      }

      updateStateWithPlaylist = () => {
        let array = this.props.state.user.playlists
        let number = parseInt(this.props.match.params.id)
        let selected = array.filter(function(playlist){ return playlist.id === number;})[0];
        this.setState({
          playlist: selected
        }, () => {
          console.log(this.state);
        }); 
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
                    <div className="PlaylistNameTitle"> {this.state.playlist.name}</div>

                    <div className="UsernameTag"> {this.props.state.user.display_name}</div>

                  </div>
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
                    <tr class="table-active">
                      <th scope="row">1</th>
                      <td>{this.props.user.display_name}</td>
                    </tr>
                    <tr class="table-active">
                      <th scope="row">2</th>
                      <td>{this.props.user.id}</td>
                    </tr>
                    <tr class="table-active">
                      <th scope="row">3</th>
                      <td>{this.props.user.spotifyid}</td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    
                  </div>
           
             </div>
    )
    }
}

const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addUserToState: (user) => dispatch(addUserToState(user)),

 })

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
