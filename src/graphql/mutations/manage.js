import gql from 'graphql-tag';

// GraphQL Mutation that writes a management object to mongoDB
export const manageForm = gql `
  mutation manage(
    $license: String!,
    $vendor: String!
    $licenseType: String!,
    $version: String!,
    $quantity: Int!,
    $listFee: Float!,
    $discount: Float,
    $supportDate: String,
    $productSupportFee:Float,
    $softwareUpdateFee: Float,
    $otherFees: Float,
    $cdPackFee: Float,
    $unitPrice: Float,
    $csi: Float,
    $vendorNumber: String,
    $user: String
  ) {
    manage(
      license: $license,
      vendor: $vendor,
      licenseType: $licenseType,
      version: $version,
      quantity: $quantity,
      listFee: $listFee,
      discount: $discount,
      supportDate: $supportDate,
      productSupportFee: $productSupportFee,
      softwareUpdateFee: $softwareUpdateFee,
      otherFees: $otherFees,
      cdPackFee: $cdPackFee,
      unitPrice: $unitPrice,
      csi: $csi,
      vendorNumber: $vendorNumber,
      user: $user
    ) {
      license
      licenseType
      quantity
      listFee
      discount
    }
  }
`;

export const deleteManagement = gql`
  mutation deleteManagement(
    $id: String!
  ) {
    deleteManagement(
      id: $id
    )
  }
`;

export const typeDefs = gql`
  type Mutation {
    uploadFile(file: Upload!): File
  }
`;