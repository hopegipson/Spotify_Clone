import React, { Component} from 'react';

export default class PlaylistPopUp extends Component {
    state = {
        text: this.props.user.playlists[1].id,
        name: this.props.user.playlists[1].name}


    
      handleOnSubmit(event) {
        event.preventDefault();
        let number = parseInt(this.state.text)
        let name = this.state.name
        this.props.addSongToPlaylist(number, name)
        this.setState({
            text: this.props.user.playlists[1].id
        })
        this.props.toggle()
      }

      handleOnChange(event) {
        this.setState({
          text: event.target.value,
          name: event.target.name
        });
      }

    handleClick = () => {
        this.props.toggle();
       };

    calculatePlaylists = () => {
    let result = this.props.user.playlists.filter(playlist => playlist.id !== 1)
    return result
    }

    render(){

        return(  
            <div className="modal">
            <div className="modal_content">
            <span className="close" onClick={this.handleClick}>
              &times;
             </span>
                <form action="/action_page.php" onSubmit={(event) => this.handleOnSubmit(event)}>
                <label >Select a playlist to add:</label>
                <div className="SongDiv">
                <img className="SongAlbumImage2" src={`${this.props.song.album.images[0].url}`} alt="new"/>
                 <h4 className="SongName">{this.props.song.name}</h4></div>
                 <br></br>
                <select className="custom-select" id="playlists" name="playlists" size="10" value={this.state.text} onChange={(event) => this.handleOnChange(event)}>
                {this.calculatePlaylists().map(playlist => (
                    <option key={playlist.id} name={playlist.name} value={playlist.id}>{playlist.name} </option>))} 
                   
                </select><br></br>
                <input className="btn btn-outline-info" type="submit"/>
                </form>
                </div>
</div> 
    )
    }
}
