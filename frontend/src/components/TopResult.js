import React, { Component} from 'react';

//import './TopResult.css';

export default class TopResult extends Component {

   
    render(){
        console.log(this.props)

        return(<div className="TopResult">
            <h2 className="TitleSection">Top result</h2>
            <div className="InsideTopResult">
            <img className="TopArtistImage" src={`${this.props.artist.images[0].url}`} alt="Avatar"></img>
            <h1 className={"TopArtistName"}>{this.props.artist.name}</h1>
            <h4 className={"TopArtistTag"}>ARTIST</h4>
            </div>

        </div>)
    }
}
