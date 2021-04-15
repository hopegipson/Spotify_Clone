import React from 'react';
import { NavLink } from 'react-router-dom';
import  { Component } from 'react';
import {postPlaylist, getUser} from '../services/localapi'
import { connect } from 'react-redux'

class NavBar extends Component {

  newPlaylist = () => {
      postPlaylist(this.props.user.id).then( () => {
        this.props.getUser(this.props.state.user.id).then(() =>        this.props.history.push( `/playlist/${this.props.state.user.playlists[this.props.state.user.playlists.length - 1].id}`)
        )
    })
  }

  calculatePlaylists = () => {
    let userLibrary = this.props.state.user.playlists[0]
    let result = this.props.state.user.playlists.filter(playlist => playlist.id !== userLibrary.id)
    return result
  }
  render(){
  return (
    <div className="sidebar">
    <img className="sidebar__logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="SpotifyLogo"></img>    <div className="sidebarOption">
        <img className="sideBarIcon" src="https://i.pinimg.com/originals/31/6d/b0/316db0a54e0c23fcab2a129cf21f43ad.png" alt="House"></img>
      <NavLink className="sidebarOption" 
        to="/dashboard" >
        Home
      </NavLink>
      </div>
          <div className="sidebarOption">
          <img className="sideBarIcon" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" alt="Search"></img>
      <NavLink className="sidebarOption" 
        to="/search"
      >
        Search
      </NavLink>
    </div>
    <div className="sidebarOption">
    <img className="sideBarIcon" src="https://icons555.com/images/icons-gray/image_icon_book_stack_pic_512x512.png" alt="House"></img>

      <NavLink className="sidebarOption" 
        to={`/library`}
      >
        My Library
      </NavLink>
    </div>
    <br></br>
    <div className="sidebarOption">
    <img className="sideBarIcon" src="https://www.materialui.co/materialIcons/content/add_circle_grey_192x192.png" alt="House"></img>
    <div className="sidebarOption" onClick ={this.newPlaylist}>
        Create a Playlist
      </div></div>
      <hr></hr>
<div>

      {this.props.state.user.playlists  ? 
            (
            <div> {this.calculatePlaylists().map(playlist => (
              <div className="sidebarOption" key={`${playlist.id}`}><img className="sideBarIcon" src={`${playlist.image}`} alt="new" />
              <NavLink className="sidebarOption"  to={`/playlist/${playlist.id}`}
        >{playlist.name}
          </NavLink> </div>))} </div> ): (<div className="sidebarOption">Still loading </div>)}
          
            </div>
    </div>
  
  )}}

  const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    postPlaylist: (user_id) => dispatch(postPlaylist(user_id)),
    getUser: (user) => dispatch(getUser(user))

 })

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);