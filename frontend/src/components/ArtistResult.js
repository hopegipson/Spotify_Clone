import React from 'react';

function ArtistResult (props) {
        return(<div className="ArtistResult">
            <h2 className="TitleSection">Artists</h2>

            <div className="InsideArtistResult">
                <div className="Row">
            {props.artists.map(artist =>(
                <div className="Column" key={artist.id}>
                    <div className="Inner">
                        {artist.images.length !== 0 ? 
                    (<img className="ArtistImage" src={`${artist.images[0].url}`} alt="new"/> ): (<img className="ArtistImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/> )}
                     <div className="ArtistName">{artist.name}</div>
                     <div className="ArtistTag">Artist</div>
                    </div>
                     </div>
                    
                  ))}
                  </div>
            </div>
        </div>)
    }
export default ArtistResult