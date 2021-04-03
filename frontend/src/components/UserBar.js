import React, { Component} from 'react';
import { fetchUserData, getUsers } from '../actions/musicPlayerActions';
import { connect } from 'react-redux'

class UserBar extends Component {

    componentDidMount() {
        this.props.fetchUserData(this.props.state.token)
        //, () => {
        //   //  this.checkToSeeIfUserExists();
        // };
       }

    checkToSeeIfUserExists = () => {
        console.log(this.state.spotifyuser)
        //in get users look in the api for the user with the username assign to state
        //if none return then you need to create a user
        // getUsers(), () => {
        //     if(this.props.state.user){
        //         //call a method to put user stuff on DOM
        //     }
        //     else{
        //         //call fetch to create user, then put user stuff on DOM
        //     }
        // }  ;
    }

    createUser = (user) => {
        console.log(user)
        //call some function to post user to api
        // api.postUser(username, patronus)
        // .then(function(user){
        //   let user1 = new User(user)
        //   game.setUser(user1)
        //   LoginDisplay.login(user1)
        // })
         }


    
   
    render(){

        return(
            <div>
                <h4>Userbar</h4>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    fetchUserData: (token) => dispatch(fetchUserData(token))
 })
  

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);