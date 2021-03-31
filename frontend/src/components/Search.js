import React, { Component} from 'react';
import { connect } from 'react-redux'
import { fetchSpotifyData } from '../actions/musicPlayerActions';

 class Search extends Component {
    constructor() {
        super();
        this.state = {
          text: '',
        };
      }

      handleSubmit = event => {
        event.preventDefault();
        console.log(this.props.token)
        this.props.fetchSpotifyData(this.state.text, this.props.state.token)
        this.setState({text: ''})
      }

      handleChange(event) {
        this.setState({
          text: event.target.value
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
    fetchSpotifyData: (term, token) => dispatch(fetchSpotifyData(term, token))

     })
      

    export default connect(mapStateToProps, mapDispatchToProps)(Search);
