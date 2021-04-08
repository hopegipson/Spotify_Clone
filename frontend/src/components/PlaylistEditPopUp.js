import React, { Component} from 'react';

export default class PlaylistEditPopUp extends Component {
    state = {
        text: this.props.playlist.name,
        imageurl: this.props.playlist.image}


    
      handleOnSubmit(event) {
        event.preventDefault();
        this.props.changePlaylist(this.state.text, this.props.playlist.image, this.props.playlist.id)
      }

      handleOnSubmitPicture(event) {
        event.preventDefault();
        this.props.changePlaylist(this.props.playlist.name, this.state.imageurl, this.props.playlist.id)
      }

      handleOnChange(event) {
        this.setState({
          text: event.target.value
        });
      }

      handleOnChangePic(event) {
        this.setState({
          imageurl: event.target.value
        });
      }

    handleClick = () => {
        this.props.toggle();
       };


    render(){

        return(  
            <div className="modal2">
            <div className="modal_content2">
            <span className="close" onClick={this.handleClick}>
              &times;
             </span>
             <h2 className="TitleSection">Edit details</h2>

             <div className="FormPictureContainer">
             <img className="PlaylistEditImage" src={`${this.props.playlist.image}`} alt="new"/>
             <form  onSubmit={(event) => this.handleOnSubmitPicture(event)}>
                <label className="LabelPlaylistPop">Picture Url:  </label>
                 <br></br>
        <input
          type="text" className="PlaylistEditBar" value={this.state.imageurl} placeholder={this.props.user.display_name}
          onChange={(event) => this.handleOnChangePic(event)} />
        <input  className="btn3 btn-outline-info changePlaylistBtn" type="submit" value="Change Picture" />
      </form>
             </div>
                    <div className="FormPlaylistContainer">

                <form  onSubmit={(event) => this.handleOnSubmit(event)}>
                <label className="LabelPlaylistPop2">Playlist Name:  </label>
                 <br></br>
        <input
          type="text" className="PlaylistNameEditBar" value={this.state.text} placeholder={this.props.user.display_name}
          onChange={(event) => this.handleOnChange(event)} />
        <input  className="btn3 btn-outline-info changePlaylistBtn2" type="submit" value="Change Name" />
      </form>
      </div>
                </div>
</div> 
    )
    }
}
