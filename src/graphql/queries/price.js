import gql from 'graphql-tag';

export const price = gql`
  query getPrice(
    $licenseName: String!,
    $NUP: String,
    $NUPSupport: String,
    $Processor: String,
    $ProcessorSupport: String
  ) {
    getPrice {
      price
    }
  }
`;