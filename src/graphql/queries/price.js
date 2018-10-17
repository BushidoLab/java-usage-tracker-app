import gql from 'graphql-tag';

export const price = gql`
  query price(
    $name: String!,
    $NUP: String,
    $NUPSupport: String,
    $Processor: String,
    $ProcessorSupport: String
  ) {
    price(
      name: $name,
      NUP: $NUP,
      NUPSupport: $NUPSupport,
      Processor: $Processor,
      ProcessorSupport: $ProcessorSupport
    ) {
      name
      NUP
      NUPSupport
      Processor
      ProcessorSupport
    }
  }
`;