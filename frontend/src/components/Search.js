import React, { Component} from 'react';
import { connect } from 'react-redux'
import { fetchSpotifyData, addSearchTerm } from '../actions/musicPlayerActions';


 class Search extends Component {
    constructor() {
        super();
        this.state = {
          text: '',
        };
      }

      handleSubmit = event => {
        event.preventDefault();
        if(this.state.text){
       this.props.fetchSpotifyData(this.state.text, this.props.state.token).then((response) => {
       this.props.history.push( `/search/${this.state.text}`)
       this.props.addSearchTerm(this.state.text)
       this.setState({text: ''})
      }) 
      }

      }

      handleChange(event) {
        this.setState({
          text: event.target.value
        });
      }

      render() {
        
        return(
        
          <div>
   
          <br></br>
            <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
              <input className="SearchBar"  type="text" placeholder="Search" onChange={event => this.handleChange(event)} value={this.state.text}/>
              <input  className="btn2" type="submit" value="X" />
           </form>

         </div>
  
       );
      }
    };

    const mapStateToProps = state => {
        return {state} 
      }
    
    const mapDispatchToProps = dispatch => ({
        fetchSpotifyData: (term, token) => dispatch(fetchSpotifyData(term, token)),
        addSearchTerm: (term) => dispatch(addSearchTerm(term))


     })
      

    export default connect(mapStateToProps, mapDispatchToProps)(Search);
