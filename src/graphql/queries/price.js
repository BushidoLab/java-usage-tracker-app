import gql from 'graphql-tag';

export const price = gql`
  query getPrice(
    $name: String!,
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