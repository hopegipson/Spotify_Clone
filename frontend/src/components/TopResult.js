import React from 'react';

function TopResult (props) {

        return(<div className="TopResult">
            <h2 className="TitleSection">Top result</h2>
            <div className="InsideTopResult">
             {props.artist.images.length !== 0 ? 
                (<img className="TopArtistImage" src={`${props.artist.images[0].url}`} alt="Avatar"></img>  ): (<img className="TopArtistImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/> )}
            <h1 className={"TopArtistName"}>{props.artist.name}</h1>
            <h4 className={"TopArtistTag"}>ARTIST</h4>
            </div>

        </div>)
}
export default TopResult
