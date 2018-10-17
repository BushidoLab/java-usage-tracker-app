import gql from 'graphql-tag';

export const management = gql`
  query management(
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
    management(
      license: $license,
      licenseType: $licenseType,
      quantity: $quantity,
      listFee: $listFee,
      discount: $discount,
      netFee: $netFee,
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
      netFee
      productSupportFee
      softwareUpdateFee
      otherFees
      cdPackFee
      unitPrice
    }
  }
`;