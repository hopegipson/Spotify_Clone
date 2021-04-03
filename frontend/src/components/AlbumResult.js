import React, { Component} from 'react';

export default class AlbumResult extends Component {
   
    render(){

        return(<div className="AlbumResult">
            <h2 className="TitleSection">Albums</h2>
            <a className="SeeMoreArtistsAlbums" href="http://google.com">SEE ALL</a>

            <div className="InsideAlbumResult">
            <div className="Row">
            {this.props.albums.map(album =>(
        <div className="Column">
            <div className="Inner">
                {album.images.length !== 0 ? 
            (<img className="AlbumImage" src={`${album.images[0].url}`} alt="new"/> ): (<img className="ArtistImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/> )}
             <div className="ArtistName">{album.name}</div>
             <div className="ArtistTag">{album.artists[0].name}</div>
            </div>
             </div>
            
          ))}
                  </div>
            </div>

        </div>)
    }
}