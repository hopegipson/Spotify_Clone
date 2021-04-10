import React from 'react';
import { NavLink } from 'react-router-dom';
import  { Component } from 'react';
import {postPlaylist, getUser} from '../services/localapi'
import { connect } from 'react-redux'
import PlaylistResult from './PlaylistResult';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PlaylistView from '../components/PlaylistView'

class PlaylistsPage extends Component {
    state = {
        start: 0,
        bottom: 6}


  newPlaylist = () => {
      postPlaylist(this.props.user.id).then( () => {
        this.props.getUser(this.props.state.user.id)
        console.log(this.props.state.playlists)
        console.log(this.props.state.user.playlists[this.props.state.user.playlists.length - 1].id)
      this.props.history.push( `/playlist/${this.props.state.user.playlists[this.props.state.user.playlists.length - 1].id}`)
    })
  }

  calculatePlaylists = () => {
    let userLibrary = this.props.state.user.playlists[0]
    let result = this.props.state.user.playlists.filter(playlist => playlist.id !== userLibrary.id)
    return result
  }

  calculateRowAmount = () => {
      let number = this.props.state.user.playlists.length
      if(number < 6){
          return 1
      }
      else if (number % 6 === 0){
          return (number/6)
      }
      else {
         let remainder = number % 6
         let number2 = number - remainder
          let number3 =  number2 / 6
          return number3 + 1
      }
  }

  increment = (number) => {
   return number + 6
  }

  

  render(){
      let start = 0
      let bottom = 6
  return (

    <div>
    <div className={`TopHalfPlaylist${this.calculateRowAmount()}`}> 
    <img className="sideBarIcon" src="https://www.materialui.co/materialIcons/content/add_circle_grey_192x192.png" alt="House"></img>
    <div className="sidebarOption" onClick ={this.newPlaylist}>  Create a Playlist</div>
   { Array.apply(null, { length: this.calculateRowAmount() }).map((e, i) => (
      <div className = {`row${i}`}>
         <Col>
       <PlaylistResult playlists={this.props.state.user.playlists.slice(start, start=start+6)}/>
       </Col>
       </div>
))}
            </div>
            <div> 
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsPage);


  