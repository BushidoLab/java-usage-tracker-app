import { Query } from 'react-apollo';
import { logs } from '../../graphql/queries/queries';
import { LinearLoader } from '../../routes/loader';


export const getLog = () => {
  <Query query={logs.getLog}>
    {({ data, error, loading }) => {
      if (loading) return <LinearLoader />;
      if (error) return console.log(error.message);
      return {data}
    }}
  </Query>
}

export const getLogCount = () => {
  <Query query={logs.getLogCount}>
    {({ data, error, loading }) => {
      if (loading) return <LinearLoader />;
      if (error) return console.log(error.message);
      return {data}
    }}
  </Query>
}

export const getAllLogs = () => {
  <Query query={logs.getAllLogs}>
    {({ data, error, loading }) => {
      if (loading) return <LinearLoader />;
      if (error) return console.log(error.message);
      return {data}
    }}
  </Query>
}