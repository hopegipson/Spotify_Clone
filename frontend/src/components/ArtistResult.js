import React, { Component} from 'react';

export default class ArtistResult extends Component {

    render(){
        console.log(this.props)

        return(<div className="ArtistResult">
            <h2 className="TitleSection">Artists</h2>
            <div className="InsideArtistResult">
            <h4 className={"TopArtistTag"}>ARTIST</h4>
            </div>

        </div>)
    }
}