import React, { Component} from 'react';

export default class SongResult extends Component {
   // <h4 className="SongArtist">{song.artists[0].name}</h4>

    render(){
        console.log(this.props)

        return(<div className="SongResult">
            <h2 className="TitleSection">Songs</h2>
           {console.log(this.props.songs)}
            <div className="InsideSongResult">
            {this.props.songs.map(song =>(
                <div className="SongDivWrapper"> 
                <div className="SongDiv">
                     <img className="SongAlbumImage" src={`${song.album.images[0].url}`} alt="new"/>
                     <h4 className="SongName">{song.name}</h4>
                     <h4 className="SongArtist">{song.artists[0].name}</h4>
                     </div>
                     </div>
                  ))}
            </div>

        </div>)
    }
}