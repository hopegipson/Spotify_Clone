import React, { Component} from 'react';
import { fetchUserData} from '../actions/musicPlayerActions';
import { connect } from 'react-redux'
import {getPlaylist, addSelectedPlaylist} from '../services/localapi.js'
import {
    BrowserRouter as Router, Route,
    Link
  } from "react-router-dom";
  import { fetchSpotifyUserSongs, fetchSpotifyUserArtists} from '../actions/musicPlayerActions';
import SongResultExtended from '../components/SongResultExtended'
import UserResult from '../components/UserResult';
import SongResult from '../components/SongResult'
import ArtistResultHome from '../components/ArtistResultHome'
import PlaylistView from '../components/PlaylistView'

class UserDashboard extends Component {

    componentDidMount() {
        getPlaylist(this.props.state.user.playlists[0].id).then((playlist) => {
            console.log(playlist)
            this.props.addSelectedPlaylist(playlist)}) 
    this.props.fetchSpotifyUserSongs(this.props.state.token).then((data) => { console.log(data)})
    this.props.fetchSpotifyUserArtists(this.props.state.token).then((data) => { console.log(data)})
    }



   
    render(){
        return(
            <div>
                
                {this.props.state.recArtistsloading && this.props.state.recSongsloading  ? 
            (    <div>         <UserResult user={this.props.state.user}/>   
                            <SongResult songs={this.props.state.recSongs.slice(0,9)}/> 
                            <ArtistResultHome artists={this.props.state.recArtists.slice(0,12)}/>


                            
                 <div className="BottomHalfPlaylist2">
            <div>
             <SongResultExtended songs={this.props.state.selectedPlaylist.playlist_songs}/>
             </div>
            <div className="TablePlaylistContainer">
            <table class="table2 table-hover">
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
              </div></div></div>): (<div> </div> )}             </div>

        )   
    }
}


const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addSelectedPlaylist: (playlist) => dispatch(addSelectedPlaylist(playlist)),
    fetchSpotifyUserSongs: (token) => dispatch(fetchSpotifyUserSongs(token)),
    fetchSpotifyUserArtists: (token) => dispatch(fetchSpotifyUserArtists(token))
 })

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);