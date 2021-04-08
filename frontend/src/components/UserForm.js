import React, { Component} from 'react';
import { changeUser, addUserToState} from '../services/localapi';
import { connect } from 'react-redux'

class UserForm extends Component {

    state = {
        text: ''}
    
      handleOnChange(event) {
        this.setState({
          text: event.target.value,
        });
      }
    
      handleOnSubmit(event) {
        event.preventDefault();
       changeUser(this.state.text, this.props.user.spotifyid, this.props.user.id).then((user) => {
        this.props.addUserToState(user)})
        this.setState({
          text: '',
        });
      }


    render(){
    
            return(
                <div>
            <div className="AccountOverview">Edit Account</div>
            <div className="FormImageContainer">
                <div className="UserFormContainer">
                    <div className="UserFormInstruction">{"Your username is your public display name. Each user must have a unique display name."}</div>
                <form class="form-one" onSubmit={(event) => this.handleOnSubmit(event)}>
                <label className="LabelUser">Username   </label>
        <input
          type="text" className="UserEditBar" value={this.state.text} placeholder={this.props.user.display_name}
          onChange={(event) => this.handleOnChange(event)} />
        <input  className="btn btn-outline-info changeUsernameBtn" type="submit" value="Change Username" />
      </form>
    </div>
    </div>
    </div>
    )
    }
}

const mapStateToProps = state => {
    return {state} 
  }

const mapDispatchToProps = dispatch => ({
    addUserToState: (user) => dispatch(addUserToState(user)),

 })

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);