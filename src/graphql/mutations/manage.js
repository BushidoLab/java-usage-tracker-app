import gql from 'graphql-tag';

export const manageForm = gql `
  mutation manage(
    $license: String!,
    $licenseType: String!,
    $quantity: Int!,
    $listFee: Float!,
    $discount: Float,
    $supportDate: String,
    $productSupportFee:Float,
    $softwareUpdateFee: Float,
    $otherFees: Float,
    $cdPackFee: Float,
    $unitPrice: Float
  ) {
    manage(
      license: $license,
      licenseType: $licenseType,
      quantity: $quantity,
      listFee: $listFee,
      discount: $discount,
      supportDate: $supportDate,
      productSupportFee: $productSupportFee,
      softwareUpdateFee: $softwareUpdateFee,
      otherFees: $otherFees,
      cdPackFee: $cdPackFee,
      unitPrice: $unitPrice
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

export const uploadFile = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
    }
  }
`;

export const typeDefs = gql`
  type File {
    _id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Mutation {
    uploadFile(file: Upload!): File
  }
`;