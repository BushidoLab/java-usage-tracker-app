import gql from 'graphql-tag';

export const getLogCount = gql`
  query getLogCount(
    $channel: String!,
    $chaincode: String!,
    $chaincodeVer: String!,
    $args: [String!]
  ) {
    getLogCount
  }
}`;

export const getLog = gql`
  query getLog(
    $channel: String!,
    $chaincode: String!,
    $chaincodeVer: String!,
    $args: [String!]
  ) {
    getLog
  }`;


export const getAllLogs = gql`
  query getAllLogs(
    $channel: String!,
    $chaincode: String!,
    $chaincodeVer: String!,
    $args: [String!]
  ) {
    getAllLogs(
      channel: $channel,
      chaincode: $chaincode,
      chaincodeVer: $chaincodeVer,
      args: $args
    )
  }
`;
