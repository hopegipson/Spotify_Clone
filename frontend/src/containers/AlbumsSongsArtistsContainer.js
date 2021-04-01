import React, { Component} from 'react';
import TopResult from '../components/TopResult';
import { connect } from 'react-redux'
import SongResult from '../components/SongResult'
import ArtistResult from '../components/ArtistResult'
import AlbumResult from '../components/AlbumResult'

 class AlbumsSongsArtistsContainer extends Component {
    render(){
        return(
            <div>
            <TopResult artist={this.props.state.artists[0]}/>
            <SongResult songs={this.props.state.songs.slice(0,4)}/>
            <ArtistResult/>
            <AlbumResult/>
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
export default connect(mapStateToProps, mapDispatchToProps)(AlbumsSongsArtistsContainer)
