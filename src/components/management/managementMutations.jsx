import React from 'react';
import { manageForm } from '../../graphql/mutations/manage';
import { Mutation } from 'react-apollo';

const AddManagement = ({}) => {
  let input;

  return (
    <Mutation mutation={manageForm}>
    {(management, { data }) => (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          management({ variables: {type: input.value}});
          input.value = "";
        }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )};
    </Mutation>
  )
}

export default AddManagement;