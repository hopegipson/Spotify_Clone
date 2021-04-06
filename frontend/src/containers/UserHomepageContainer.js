import React, { Component} from 'react';
import { fetchUserData} from '../actions/musicPlayerActions';
import { connect } from 'react-redux'
import {getUsers, postUser, addUserToState} from '../services/localapi.js'
import UserPage from '../components/UserPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
        let selectedUser = users.filter(function(user) { if (user.spotifyid === spotifyid)  return true})[0]
        if (!selectedUser){
            this.createUser()
          }
          else{
              this.props.addUserToState(selectedUser)
          }
    }

    createUser = () => {    
        console.log(this.props.state.spotifyuser.id)
        this.props.postUser(this.props.state.spotifyuser.display_name, this.props.state.spotifyuser.id)
    }


    
   
    render(){
        return(
            <div>
                {console.log(this.props)}
                <button class="dropbtn"> {this.props.state.user.display_name}  </button>
                <img className="UserIcon" src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" ></img><div className="dropdown">
                <img class="ArrowIcon" src="http://dmconsulting.net/wp-content/uploads/2017/09/Drop-down-arrow-icon-rounded.png" ></img>
               

                                <div class="dropdown-content">
                                <Link key={this.props.state.user.id} className="sidebarOption" to={`/users/${this.props.state.user.id}`}><a>Account</a> </Link>
                                <Link key={this.props.state.user.id} className="sidebarOption" to={`/useredit/${this.props.state.user.id}`}><a>Edit Profile</a> </Link>
                                <Link className="sidebarOption" to="/search"><a>Log out</a> </Link>
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