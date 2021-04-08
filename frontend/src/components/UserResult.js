import React, { Component} from 'react';

//import './TopResult.css';

export default class UserResult extends Component {

    getGreeting = () =>{
        let today = new Date();
        let time = today.getHours()
        if (time < 13){return "Good morning"}
        else {return "Good evening"}
    }



   
    render(){

        return(
        <div className="TopResult">
            <h2 className="TitleSection">{this.getGreeting()}</h2>
            <div className="InsideTopResult">
            <img className="TopArtistImage" src={`https://www.scdn.co/i/_global/twitter_card-default.jpg`} alt="Avatar"></img>
        
            <h1 className={"TopArtistName"}>{this.props.user.display_name}</h1>
            </div>

        </div>)
    }
}