import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="sidebar">
    <img className="sidebar__logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="SpotifyLogo"></img>    <div className="sidebarOption">
        <img className="sideBarIcon" src="https://i.pinimg.com/originals/de/3b/84/de3b840f5d4b5e76b1056197e076d688.png" alt="House"></img>
      <NavLink className="sidebarOption" 
        to="/dashboard" >
        Home
      </NavLink>
      </div>
          <div className="sidebarOption">
          <img className="sideBarIcon" src="https://i.pinimg.com/originals/de/3b/84/de3b840f5d4b5e76b1056197e076d688.png" alt="House"></img>
      <NavLink className="sidebarOption" 
        to="/search"
      >
        Search
      </NavLink>
    </div>
    <div className="sidebarOption">
    <img className="sideBarIcon" src="https://i.pinimg.com/originals/de/3b/84/de3b840f5d4b5e76b1056197e076d688.png" alt="House"></img>

      <NavLink className="sidebarOption" 
        to="/search"
      >
        My Playlists
      </NavLink>
    </div>
    <br></br>
    <h4>Your Playlists:</h4>
    </div>
  );
}

export default NavBar;