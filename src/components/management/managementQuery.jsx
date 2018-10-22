import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LinearLoader from '../../routes/loader';

const GET_MANAGEMENT = gql`
  query getManagement(
    $license: String,
    $licenseType: String,
    $quantity: Int,
    $listFee: Float,
    $discount: Float,
    $netFee: Float,
    $productSupportFee:Float,
    $softwareUpdateFee: Float,
    $otherFees: Float,
    $cdPackFee: Float,
    $unitPrice: Float
  ) {
    getManagement
  }
`;

const manageQuery = () => {
  <Query query={GET_MANAGEMENT}>
    {({ loading, error, data }) => {
      if (loading) return <LinearLoader />;
      if (error) return `Error: ${error.message}`;
      console.log(data)
      return (
        {data}
      );
    }}
  </Query>
}

export default manageQuery;