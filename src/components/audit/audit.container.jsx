import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import AuditComponent from './audit.component';
import { compose, withApollo, Query } from 'react-apollo';
import { getAllLogs } from '../../graphql/queries/logs';

class AuditContainer extends Component {
  state = {
    open: false,
    gridOptions: {
      columnDefs: [
        {headerName: "", checkboxSelection: true, width: 30 },
        {headerName: "Device", children: [
          {headerName: "Device Name", field: "deviceName", width: 160},
          {headerName: "IP", field: "IP", width: 160},
        ]},
        {headerName: "Processor", children: [
          {headerName: "Processor", field: "processor", width: 160},
          {headerName: "Cores", field: "cores", width: 160},
        ]},
        {headerName: "Product", children: [
          {headerName: "Publisher", field: "publisher", width: 160},
          {headerName: "Category", field: "category", width: 160},
          {headerName: "Product", field: "product", width: 160},
        ]},
        {headerName: "Usage", children: [
          {headerName: "App Name", field: "appName", width: 160},
          {headerName: "User Count", field: "userCount", width: 160},
        ]},
        {headerName: "Operating Environment", children: [
          {headerName: "Operating System", field: "operatingSystem", width: 160},
          {headerName: "Virtual Machine", field: "virtualMachine", width: 160},
        ]}
      ],
      rowData: [
        {}
      ],
      componentDidMount() {
        const { client } = this.props;
    
        client.query({
          query: getAllLogs,
          variables: {channel: "default", chaincode: "ProcessorChaincode", chaincodeVer: "1.0", args: ["oracle"]}
        })
        .then(result => result.data.getAllLogs.json())
        .then(rowData => this.setState({rowData}))
      },
    },
  };

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
    return (
      <div>
        <Query
         query={getAllLogs}
         variables={{channel: 'default', chaincode: 'ProcessorChaincode', chaincodeVer: '1.0', args: ["oracle"]}}
         >
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error.message}`;
            console.log(data.getAllLogs)
            return (
              Object.values(data.getAllLogs)
            )
          }}
        </Query>
        <Query
         query={getAllLogs}
         variables={{channel: 'default', chaincode: 'NUPChaincode', chaincodeVer: '1.0', args: ["oracle"]}}
         >
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error.message}`;
            console.log(data.getAllLogs)
            return (
              Object.values(data.getAllLogs)
            )
          }}
        </Query>
        <AuditComponent
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
        />
      </div>
      );
  }
}

const enhancer = compose(
  withApollo
)

export default enhancer(AuditContainer);