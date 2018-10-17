import gql from 'graphql-tag';

export const logs = gql`
  query getLogCount(
    $channel: String!,
    $chaincode: String!,
    $chaincodeVer: String!,
    $args: [String!]
  ) {
    getLogCount(
      channel: $channel,
      chaincode: $chaincode,
      chaincodeVer: $chaincodeVer,
      args: $args
    )
  }

  query getLog(
    $channel: String!,
    $chaincode: String!,
    $chaincodeVer: String!,
    $args: [String!]
  ) {
    getLog(
      channel: $channel,
      chaincode: $chaincode,
      chaincodeVer: $chaincodeVer,
      args: $args
    )
  }

  query getAllLogs(
    $channel: String!,
    $chaincode: String!,
    $chaincodeVer: String!,
    $args: [String!]
  ) {
    getLog(
      channel: $channel,
      chaincode: $chaincode,
      chaincodeVer: $chaincodeVer,
      args: $args
    )
  }
`;
