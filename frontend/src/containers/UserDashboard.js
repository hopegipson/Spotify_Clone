import React, { Component} from 'react';
import { connect } from 'react-redux'
import {getPlaylist, addSelectedPlaylist} from '../services/localapi.js'
  import { fetchRecentlyPlayedUserSongs, fetchSpotifyUserArtists} from '../actions/musicPlayerActions';
import UserResult from '../components/UserResult';
import SongResultRecent from '../components/SongResultRecent'
import ArtistResultHome from '../components/ArtistResultHome'
import SongResultExtended from '../components/SongResultExtended'
import TopResultHome from '../components/TopResultHome'

class UserDashboard extends Component {

    componentDidMount() {
        getPlaylist(this.props.state.user.playlists[0].id).then((playlist) => {
            this.props.addSelectedPlaylist(playlist)}) 
    this.props.fetchRecentlyPlayedUserSongs(this.props.state.token)
    this.props.fetchSpotifyUserArtists(this.props.state.token)
    }

    componentDidUpdate(prevProps) {
        if (this.props.state.user !== prevProps.state.user){
            getPlaylist(this.props.state.user.playlists[0].id).then((playlist) => {
                this.props.addSelectedPlaylist(playlist)}) 
        }
      }



   
    render(){
        return(
            <div>
              
                
                {this.props.state.recArtistsloading && this.props.state.recPlayedloading  ? 
            (    <div>         <UserResult user={this.props.state.user}/>   
                            <TopResultHome artist={this.props.state.recArtists[0]}/>
            <div className="SongResultC">
                            <SongResultRecent songs={this.props.state.recPlayedSongs.slice(0,9  )}/>
                            </div> 
                            <ArtistResultHome artists={this.props.state.recArtists}/>


                            
                 <div className="BottomHalfPlaylist2">
            <div>
                <h2 className="TitleSection">{"Music Library"}</h2>
             <SongResultExtended extrabutton="None"  songs={this.props.state.selectedPlaylist.playlist_songs}/>
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
              </div></div></div>): (<div> </div> )}             </div>

        )   
    }
}


const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addSelectedPlaylist: (playlist) => dispatch(addSelectedPlaylist(playlist)),
    fetchRecentlyPlayedUserSongs: (token) => dispatch(fetchRecentlyPlayedUserSongs(token)),
    fetchSpotifyUserArtists: (token) => dispatch(fetchSpotifyUserArtists(token))
 })

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);