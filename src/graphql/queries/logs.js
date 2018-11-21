import gql from 'graphql-tag';

export const getLogCount = gql`
  query getLogCount {
    getLogCount
  }
`;

export const getLog = gql`
  query getLog(
    $channel: String!,
    $chaincode: String!,
    $chaincodeVer: String!,
    $args: [String!]
  ) {
    getLog
  }`;

// Queries getAllProcLogs and getallNUPLogs and pushes them into the same array then returns it
export const getAllLogs = gql`
  query getAllLogs{
    getAllLogs
  }
`;

export const getAllProcLogs = gql`
  query getAllProcLogs {
    getAllProcLogs
  }
`;
