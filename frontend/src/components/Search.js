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
       this.props.fetchSpotifyData(this.state.text, this.props.state.token).then((response) => {
       this.props.history.push( `/search/${this.state.text}`)
       this.setState({text: ''})
     }) 
      }

      handleChange(event) {
        this.setState({
          text: event.target.value
        });
      }

      render() {
        
        return(
        
          <div>
   

            <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0">
                <label>Search:</label>
              <input className="form-control mr-sm-2"  type="text" placeholder="Search" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
              <input  className="btn btn-secondary my-2 my-sm-0" type="submit" />
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
