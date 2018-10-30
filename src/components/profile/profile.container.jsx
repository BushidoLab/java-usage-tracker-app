import React, { Component } from 'react'
import { compose, withApollo } from 'react-apollo';
import ProfileComponent from './profile.component';

class ProfileContainer extends Component {
  state = {
    firstName: String(),
    lastName: String(),
    email: String(),
  }
  
  componentWillMount() {
    const accountInfo = sessionStorage.getItem('acctInfo').split(' ');
    this.setState({
      ...(accountInfo[0] && { email: accountInfo[0] }),
      ...(accountInfo[1] && { email: accountInfo[1] }),
      ...(accountInfo[2] && { email: accountInfo[2] }),
    })
  }
  
  render() {
    const { firstName, lastName, email } = this.state;
    return (
    <ProfileComponent 
      firstName={firstName}
      lastName={lastName}
      email={email}
    />
    );
  }
}

const enhancer = compose(withApollo)

export default enhancer(ProfileContainer);