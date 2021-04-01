import React, { Component} from 'react';

export default class AlbumResult extends Component {

    render(){
        console.log(this.props)

        return(<div className="AlbumResult">
            <h2 className="TitleSection">Albums</h2>
            <div className="InsideAlbumResult">
            <h4 className={"TopArtistTag"}>ARTIST</h4>
            </div>

        </div>)
    }
}