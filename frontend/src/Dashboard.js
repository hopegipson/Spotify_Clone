import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import MusicPlayerContainer from './containers/MusicPlayerContainer';

import NavBar from './components/NavBar'
import SearchPage from './containers/SearchPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';



//will want to show some sort of login to spotify button unless there is already a token
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {}
    }


  render() 

  {
    return (
      <div className="Dashboard">
          "Dashboard"
          <Router>
            <NavBar />
            <Route path='/search' render={routerProps => <SearchPage {...routerProps} />} />

          </Router>        
       <MusicPlayerContainer playingRecordingId="spotify:track:4iV5W9uYEdYUVa79Axb7Rh" />
       <br></br>
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 
