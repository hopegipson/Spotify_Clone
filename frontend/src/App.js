import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MusicPlayerContainer from './containers/MusicPlayerContainer';
import SpotifyAuthButton from './components/SpotifyAuthButton';

//will want to show some sort of login to spotify button unless there is already a token
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>APP</h1>
       <MusicPlayerContainer playingRecordingId="spotify:track:4iV5W9uYEdYUVa79Axb7Rh" />
       <br></br>
      <SpotifyAuthButton/>
      </div>
    );
  }
}



export default App;
