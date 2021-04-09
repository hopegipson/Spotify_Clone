import React from 'react';


function UserResult (props) {

   const getGreeting = () =>{
        let today = new Date();
        let time = today.getHours()
        if (time < 13){return "Good morning"}
        else {return "Good evening"}
    }
        return(
        <div className="UserResult">
            <h2 className="TitleSection">{getGreeting()}</h2>
            <div className="InsideUserResult">
            <img className="TopArtistImage" src={`https://www.scdn.co/i/_global/twitter_card-default.jpg`} alt="Avatar"></img>
        
            <h1 className={"TopArtistName"}>{props.user.display_name}</h1>
            </div>

        </div>)
}

export default UserResult