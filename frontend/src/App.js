import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import SpotifyAuthButton from './components/SpotifyAuthButton';
import MusicPlayerContainer from './containers/MusicPlayerContainer'
class App extends Component {
  

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
    let foundToken = hash.access_token;
    if (foundToken) {
      this.props.setToken(foundToken)
      
  }}

  isValidToken = () => {
    if (this.props.state.token){
      return true
    }
  }



  render() 

  {
    return (
      <div className="App">
      {this.isValidToken() ? (
      <MusicPlayerContainer token={this.props.token}/>
      ) : ( <SpotifyAuthButton/>)}
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
