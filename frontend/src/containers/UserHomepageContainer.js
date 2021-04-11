import React, { Component} from 'react';
import { fetchUserData} from '../actions/musicPlayerActions';
import { connect } from 'react-redux'
import {getUsers, postUser, addUserToState} from '../services/localapi.js'
import {
    BrowserRouter as Router, Route,
    Link
  } from "react-router-dom";
import UserDashboard from '../containers/UserDashboard'


class UserBar extends Component {

    componentDidMount() {
        this.props.fetchUserData(this.props.state.token).then(() => { this.checkifUserExists()})
       }
    
    checkifUserExists = () => {
        let value = getUsers()
        if (value)
        {value.then(json => this.lookForUser(json, this.props.state.spotifyuser.id))}
        else{this.createUser()}       
    }

    lookForUser = (users, spotifyid) => {
        let selectedUser = users.filter(function(user) { if (user.spotifyid === spotifyid)  return user})[0]
        if (!selectedUser){
            this.createUser()
          }
          else{
              this.props.addUserToState(selectedUser)
          }
    }

    createUser = () => {    
        this.props.postUser(this.props.state.spotifyuser.display_name, this.props.state.spotifyuser.id)
    }

    render(){
        return(
            <div>
                 {this.props.state.user.playlists ? 
            (<Route exact path='/dashboard'  render={routerProps => <UserDashboard/> } /> ): (<div> </div>)}
          
                <button className="dropbtn"> {this.props.state.user.display_name}  </button>
                <img className="UserIcon" src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png"  alt="user"></img>
                <div className="dropdown">
                <img className="ArrowIcon" src="http://dmconsulting.net/wp-content/uploads/2017/09/Drop-down-arrow-icon-rounded.png" ></img>
                                <div className="dropdown-content">
                                <Link  className="sidebarOption" to={`/users/${this.props.state.user.id}`}><p className="OptionDash">Account</p> </Link>
                                <Link  className="sidebarOption" to={`/useredit/${this.props.state.user.id}`}><p className="OptionDash">Edit Profile</p> </Link>
                               <a href="/" className="sidebarOption"><p className="OptionDash">Log out</p></a> 
                            </div>
                      
                    </div>

            </div>

        )   
    }
}


const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    fetchUserData: (token) => dispatch(fetchUserData(token)),
    postUser: (display_name, spotifyid) => dispatch(postUser(display_name, spotifyid)),
    addUserToState: (user) => dispatch(addUserToState(user))
 })

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);