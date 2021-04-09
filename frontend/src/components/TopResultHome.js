import React from 'react';

 function TopResultHome (props) {

        return(<div className="TopResultHome">
            <h2 className="TitleSectionHome">Top Suggestion:</h2>
            <div className="InsideTopResultHome">
            {props.artist.images ? 
            (<img className="TopArtistImage" src={`${props.artist.images[0].url}`} alt="Avatar"></img> ): (<img className="TopArtistImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/> )}
            <h1 className={"TopArtistName"}>{props.artist.name}</h1>
            <h1 className={"TopArtistGenreLabel"}>{"Genres:"}</h1>
            <h1 className={"TopArtistGenre"}>{props.artist.genres.map(genre => (genre + " "))}</h1>
            <h1 className={"TopArtistFollowersLabel"}>{"Followers:"}</h1>
            <h1 className={"TopArtistFollowers"}>{props.artist.followers.total}</h1>
            <h1 className={"TopArtistPopularityLabel"}>{"Popularity:"}</h1>
            <h1 className={"TopArtistPopularity"}>{props.artist.popularity}</h1>
            <h4 className={"TopArtistTag"}>ARTIST</h4>
            </div>

        </div>)
}

export default TopResultHome