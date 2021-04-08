import React, { Component} from 'react';

//import './TopResult.css';

export default class TopResultHome extends Component {

   
    render(){

        return(<div className="TopResultHome">
            <h2 className="TitleSectionHome">Top Suggestion:</h2>
            <div className="InsideTopResultHome">
            {this.props.artist.images.length !== 0 ? 
            (<img className="TopArtistImage" src={`${this.props.artist.images[0].url}`} alt="Avatar"></img> ): (<img className="TopArtistImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/> )}
        
            <h1 className={"TopArtistName"}>{this.props.artist.name}</h1>
            <h1 className={"TopArtistGenreLabel"}>{"Genres:"}</h1>
            <h1 className={"TopArtistGenre"}>{this.props.artist.genres.map(genre => (genre + " "))}</h1>
            <h1 className={"TopArtistFollowersLabel"}>{"Followers:"}</h1>
            <h1 className={"TopArtistFollowers"}>{this.props.artist.followers.total}</h1>
            <h1 className={"TopArtistPopularityLabel"}>{"Popularity:"}</h1>
            <h1 className={"TopArtistPopularity"}>{this.props.artist.popularity}</h1>


            <h4 className={"TopArtistTag"}>ARTIST</h4>
            </div>

        </div>)
    }
}