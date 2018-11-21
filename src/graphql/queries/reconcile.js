import gql from 'graphql-tag';

export const getReconcile = gql`
  query getReconcile {
    getReconcile
  }
`;

export const getEmail = gql`
  query getEmail($email: String!) {
      getEmail(email: $email) {
        email
      }
    }
`;