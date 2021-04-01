import React, { Component} from 'react';
import TopResult from '../components/TopResult';
import { connect } from 'react-redux'


 class AlbumsSongsArtistsContainer extends Component {
    render(){
        return(
            <div>
            <TopResult artist={this.props.state.artists[0]}/>
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
