import gql from 'graphql-tag';

export const singleUpload = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      id
      filename
      mimetype
      path
    }
  }
`;