import React, { Component } from 'react'
import { compose, withApollo } from 'react-apollo';
import ProfileComponent from './profile.component';

class ProfileContainer extends Component {

  
  render() {
    const { client } = this.props;
    console.log(client)

    return <ProfileComponent />
  }
}

const enhancer = compose(withApollo)

export default enhancer(ProfileContainer);