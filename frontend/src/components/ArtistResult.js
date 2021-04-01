import React, { Component} from 'react';

export default class ArtistResult extends Component {

    render(){
        console.log(this.props)

        return(<div className="ArtistResult">
            <h2 className="TitleSection">Artists</h2>
            <div className="InsideArtistResult">
            {this.props.artists.map(artist =>(
                <div className="SongDivWrapper"> 
                <div className="SongDiv">
                     <img className="SongAlbumImage" src={`${artist.images[0].url}`} alt="new"/>
                     <h4 className="SongName">{artist.name}</h4>
                     <h4 className={"TopArtistTag"}>ARTIST</h4>

                     </div>
                     </div>
                  ))}
            </div>

        </div>)
    }
}