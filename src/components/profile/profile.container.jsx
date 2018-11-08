import React, { Component } from 'react'
import { compose, withApollo, Query } from 'react-apollo';
import ProfileComponent from './profile.component';
import { userInfo } from '../../graphql/queries/auth';

class ProfileContainer extends Component {
  state = {
    firstName: String(),
    lastName: String(),
    email: String(),
  }
  
  componentWillMount() {
    const accountInfo = sessionStorage.getItem('acctInfo').trim();

    this.setState ({
      email: accountInfo
    })
  }

  getUserInfo = async e => {
    const { client } = this.props;
    const data = client.query({
      query: userInfo,
      variables: { email: this.state.email }
    })
    return data;
  }
  
  render() {
    const { email } = this.state;
    return (
      <div>
        <Query query={userInfo} variables={{email: email}}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error}`;
            return (
              <ProfileComponent 
                firstName={data.userInfo.firstName}
                lastName={data.userInfo.lastName}
                email={email}
              />
              )
            }}
        </Query>
        
      </div>
    );
  }
}

const enhancer = compose(
  withApollo
)

export default enhancer(ProfileContainer);