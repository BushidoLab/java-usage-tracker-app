import gql from 'graphql-tag';

export const getManagement = gql`
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