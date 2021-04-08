import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import Footer from './containers/Footer';
import { Redirect } from 'react-router-dom';

import NavBar from './components/NavBar'
import SearchPage from './containers/SearchPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserHomepageContainer from './containers/UserHomepageContainer'
import UserPage from './components/UserPage'
import UserForm from './components/UserForm'
import PlaylistView from './components/PlaylistView'
import SearchDashboard from './components/SearchDashboard'
import UserDashboard from './containers/UserDashboard'

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
          <Router>
          <Redirect to="/dashboard" />
            <UserHomepageContainer/>
            <Route exact path='/search' render={routerProps => <SearchDashboard/> } />
            <Route path='/' render={routerProps => <NavBar {...routerProps} user={this.props.state.user} />} />
            <Route path='/search' render={routerProps => <SearchPage {...routerProps} />} />
            <Route  path="/users/:id" render={() => <UserPage user={this.props.state.user} />}/>
            <Route path="/useredit/:id" render={() => <UserForm user={this.props.state.user} />}/>
            <Route path="/playlist/:id" render={routerProps => <PlaylistView {...routerProps} user={this.props.state.user} />}/>
          </Router>
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
