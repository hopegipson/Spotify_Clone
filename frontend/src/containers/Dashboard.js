import { connect } from 'react-redux'
import React, { Component } from 'react';
import Footer from '../containers/Footer';
import LibraryView from '../components/LibraryView'
import NavBar from '../components/NavBar'
import SearchPage from '../containers/SearchPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserHomepageContainer from '../containers/UserHomepageContainer'
import UserPage from '../components/UserPage'
import UserForm from '../components/UserForm'
import PlaylistView from '../components/PlaylistView'
import SearchDashboard from '../components/SearchDashboard'
import SeeMoreSongsView from '../components/SeeMoreSongsView'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {}
    }



  render() 

  {
    return (<div className="FooterCont">
      <div className="Dashboard">

          <Router>
            <UserHomepageContainer/>
            <Route exact path='/search' render={routerProps => <SearchDashboard/> } />
            <Route exact path='/SeeMoreSongs' render={routerProps =>  <SeeMoreSongsView searchTerm={this.props.state.searchTerm}/>}/>
            <Route exact path='/SeeMoreSongs/Recent' render={routerProps =>  <SeeMoreSongsView searchTerm={"Recommended Songs"} songs={this.props.state.recSongs}/>}/>
            <Route path='/' render={routerProps => <NavBar {...routerProps} user={this.props.state.user} />} />
            <Route path='/search' render={routerProps => <SearchPage {...routerProps} />} />
            <Route  path="/users/:id" render={() => <UserPage user={this.props.state.user} />}/>
            <Route path="/useredit/:id" render={() => <UserForm user={this.props.state.user} />}/>
            <Route path="/playlist/:id" render={routerProps => <PlaylistView {...routerProps} user={this.props.state.user} />}/>
            <Route path="/library" render={routerProps => <LibraryView {...routerProps} user={this.props.state.user} />}/>
          </Router>
       <br></br>
      </div>
      <Footer token={this.props.state.token}/>
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
