import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import Footer from './containers/Footer';

import NavBar from './components/NavBar'
import SearchPage from './containers/SearchPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserBar from './components/UserBar'

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
        <UserBar/>       
       <Footer token={this.props.state.token}/>
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
