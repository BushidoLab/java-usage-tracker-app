import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { withRouter } from 'react-router-dom';
import AuditComponent from './audit.component';
import { compose, withApollo, graphql, Query } from 'react-apollo';
import { getAllProcLogs } from '../../graphql/queries/logs';
import { getAllLogs } from '../../graphql/queries/logs';

class AuditContainer extends Component {
  state = {
    open: false,
    gridOptions: {
      columnDefs: [
        {headerName: "", checkboxSelection: true, width: 30 },
        {headerName: "Device", children: [
          {headerName: "Device Name", field: "hostname", width: 140},
          {headerName: "IP", field: "IP", width: 140},
        ]},
        {headerName: "Product", children: [
          {headerName: "Publisher", field: "vendor", width: 140},
          {headerName: "Category", field: "category", width: 140},
          {headerName: "Product", field: "product", width: 140},
        ]},
        {headerName: "Usage", children: [
          {headerName: "App Name", field: "appName", width: 140},
          {headerName: "User Count", field: "userCount", width: 140},
          {headerName: "Last used", field: "dateTime", width: 140}
        ]},
        {headerName: "Operating Environment", children: [
          {headerName: "Operating System", field: "operatingSystem", width: 140},
          // {headerName: "Virtual Machine", field: "virtualMachine", width: 140},
        ]},
        {headerName: "Processor", children: [
          {headerName: "Processor", field: "model", width: 140},
          {headerName: "Cores", field: "cores", width: 140},
        ]},
      ],
      rowData: []
    },
  };

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs } } = this.state;
    const { data: { getAllProcLogs }} = this.props;
    return (
      <div>
        <Query query={getAllLogs}>
          {({loading, error, data}) => {
            if (loading) return null;
            if (error) return `Error: ${error}`
            const nupLogs = data.getAllLogs
            return (
              <AuditComponent
              columnDefs={columnDefs}
              rowData={[getAllProcLogs, nupLogs]}
              gridOptions={gridOptions}
              />
            )
          }}
        </Query>  
      </div>
      );
  }
}

const enhancer = compose(
  withApollo,
  withRouter,
  graphql(getAllProcLogs),
)

export default enhancer(AuditContainer);