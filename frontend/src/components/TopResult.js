import React, { Component} from 'react';

//import './TopResult.css';

export default class TopResult extends Component {

   
    render(){

        return(<div className="TopResult">
            <h2 className="TitleSection">Top result</h2>
            <div className="InsideTopResult">
            {this.props.artist.images.length !== 0 ? 
            (<img className="TopArtistImage" src={`${this.props.artist.images[0].url}`} alt="Avatar"></img> ): (<img className="TopArtistImage" src="https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"alt="new"/> )}
        
            <h1 className={"TopArtistName"}>{this.props.artist.name}</h1>
            <h4 className={"TopArtistTag"}>ARTIST</h4>
            </div>

        </div>)
    }
}
