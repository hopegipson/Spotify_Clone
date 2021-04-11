import React, { Component} from 'react';
import TopResult from '../components/TopResult';
import { connect } from 'react-redux'
import SongResult from '../components/SongResult'
import ArtistResult from '../components/ArtistResult'
import AlbumResult from '../components/AlbumResult'

 class ContentContainer extends Component {
    render(){
        return(
          
            <div>
            <TopResult artist={this.props.state.artists[0]}/>
            <SongResult searchId={this.props.match.params.searchTerm} songs={this.props.state.songs.slice(0,4)}/>
            <ArtistResult artists={this.props.state.artists.slice(0,6)}/>
            <AlbumResult albums ={this.props.state.albums.slice(0,6)}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      state
    }
  }

const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)
