import { Query } from 'react-apollo';
import { management } from '../../graphql/queries/queries';
import { LinearLoader } from '../../routes/loader';


const getManagement = () => {
  <Query query={management}>
    {({ data, error, loading }) => {
      if (loading) return <LinearLoader />;
      if (error) return console.log(error.message);
      console.log(data)
      return {data}
    }}
  </Query>
}

export default getManagement;