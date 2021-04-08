import React, { Component} from 'react';
import { fetchSpotifyUserSongs, fetchSpotifyUserArtists} from '../actions/musicPlayerActions';
import { connect } from 'react-redux'
import TopResult from './TopResult';
import SongResult from './SongResult'
import ArtistResult from './ArtistResult'
class SearchDashboard extends Component {

    componentDidMount() {
        
        this.props.fetchSpotifyUserSongs(this.props.state.token)
        this.props.fetchSpotifyUserArtists(this.props.state.token)

       }

    
   
    render(){
        return(
            <div>

            {this.props.state.recArtistsloading && this.props.state.recSongsloading  ? 
            (<div>  <TopResult artist={this.props.state.recArtists[0]}/>
                <SongResult songs={this.props.state.recSongs.slice(0,4)}/>
                 <ArtistResult artists={this.props.state.recArtists.slice(0,6)}/></div>): (<div> </div> )}   
            </div>

        )   
    }
}


const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    fetchSpotifyUserSongs: (token) => dispatch(fetchSpotifyUserSongs(token)),
    fetchSpotifyUserArtists: (token) => dispatch(fetchSpotifyUserArtists(token))
 })

export default connect(mapStateToProps, mapDispatchToProps)(SearchDashboard);