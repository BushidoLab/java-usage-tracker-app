import gql from 'graphql-tag';

export const userInfo = gql`
  query userInfo($email: String!) {
    userInfo(email: $email)
  }
`;