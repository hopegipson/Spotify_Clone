import React, { Component} from 'react';


export default class UserPage extends Component {
    render(){
    
            return(
                <div>
            <div className="AccountOverview">Account Overview</div>
            <div className="TableImageContainer">
                <div className="TableContainer">
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      <th scope="row">Username</th>
      <td>{this.props.user.display_name}</td>
    </tr>
    <tr class="table-active">
      <th scope="row">ID</th>
      <td>{this.props.user.id}</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Spotify ID</th>
      <td>{this.props.user.spotifyid}</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
              )
    }
}