import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import uploadsQuery from '../../graphql/queries/uploads';
// import { getManagement } from '../../graphql/queries/manage';
import { singleUpload } from '../../graphql/mutations/uploads';

const UploadFile = ({ mutate }) => {
  const handleSubmit = async e => (
    {
    target: {
      validity,
      files: [file]
    }
  }) =>
    validity.valid &&
    mutate({
      variables: { file },
      update(
        proxy,
        {
          data: { singleUpload }
        }
      ) {
        const data = proxy.readQuery({ query: uploadsQuery })
        data.push(singleUpload)
        proxy.writeQuery({ query: uploadsQuery, data })
      }
    })

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accepts=".csv" required/>
      <button>Upload</button>
    </form>
  );
}



export default withApollo(UploadFile);