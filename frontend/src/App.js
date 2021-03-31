import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import MusicPlayerContainer from './containers/MusicPlayerContainer';
import SpotifyAuthButton from './components/SpotifyAuthButton';

//will want to show some sort of login to spotify button unless there is already a token
class App extends Component {
  constructor() {
    super();
    this.state = {}
    }
  

  componentDidMount() {
    const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});    
    console.log(hash)
    let foundToken = hash.access_token;
    if (foundToken) {
      this.props.setToken(foundToken)
      fetch('https://api.spotify.com/v1/search?query=neyo&type=album,playlist,artist', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + foundToken
            }
        })
            .then((response) => {
                console.log(response.json().then(
                    (data) => { console.log(data) }
                ));
            });
  }}


  render() 

  {
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

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: tokenText => dispatch({type: 'SET_TOKEN', payload: tokenText })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App); 
