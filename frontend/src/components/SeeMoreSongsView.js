import React, { Component} from 'react';
import { addSelectedPlaylist, getUser, addUserToState} from '../services/localapi';
import { connect } from 'react-redux'
import SongResultSeeMore from './SongResultSeeMore'

class SeeMoreSongsView extends Component {

    state = {
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

    figureSongs = () => {
      if (this.props.songs){
        return this.props.songs
      }
      else if (this.props.state.songs.length !== 0){
        return this.props.state.songs
      }
    }




    render(){
      const songs = this.figureSongs()

    
            return(
              
                <div>
          
                  
                  <div className="TopHalfPlaylist3">
                    <div>
                    <div className="PlaylistNameTitle2"  > {this.props.searchTerm}</div>
                    <div className="UsernameTag"> {"SONGS"}</div></div> 

                  </div>
                    <div>
                  <div className="BottomHalfPlaylist3">
                  <div>
                   <SongResultSeeMore   songs={songs}/>
                   </div>
                  <div className="TablePlaylistContainer">
                  <table className="table2 table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="20px">#</th>
                      <th scope="col" width="510px">Title</th>
                      <th scope="col" width="320px">Artist</th>
                      <th scope="col" width="330px">Album</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    </tbody>
                    </table>
                    </div>

                    
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
    addSelectedPlaylist: (playlist) => dispatch(addSelectedPlaylist(playlist)),
    addUserToState: (user) => dispatch(addUserToState(user)),
    getUser: (user) => dispatch(getUser(user))

 })

export default connect(mapStateToProps, mapDispatchToProps)(SeeMoreSongsView);