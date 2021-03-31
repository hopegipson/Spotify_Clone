import React, { Component} from 'react';
import { connect } from 'react-redux'

 class Search extends Component {
    constructor() {
        super();
        this.state = {
          text: '',
        };
      }

      handleSubmit = event => {
        event.preventDefault();
       this.lookForTerm(this.state.text)
        this.setState({text: ''})
      }

      handleChange(event) {
        this.setState({
          text: event.target.value
        });
      }

      lookForTerm = (term) => {
        fetch(`https://api.spotify.com/v1/search?query=${term}&type=album,playlist,artist`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.state.token
            }
        })
            .then((response) => {
                console.log(response.json().then(
                    (data) => {
                         console.log(data)
                        this.props.addALBUMS(data.albums.items)

                     }
                ));
            });
      }



      render() {
        return(
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>Search:</label>
              <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
              <input type="submit" />
           </form>
         </div>
       );
      }
    };

    const mapStateToProps = state => {
        return {state}
      }
    
    const mapDispatchToProps = dispatch => ({
      addALBUMS: albumData => dispatch({ type: 'ADD_ALBUMS', albums: albumData })    })

    export default connect(mapStateToProps, mapDispatchToProps)(Search);
