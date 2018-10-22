import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { compose, withApollo, Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReconcileComponent from './reconcile.component';
import { getManagement } from '../../graphql/queries/manage';
import { getLogCount } from '../../graphql/queries/logs';

class ReconcileContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [
          {headerName: "Publisher", field: "publisher"},
          {headerName: "Product Name", field: "productName"},
          {headerName: "License Type", field: "licenseType"},
          {headerName: "Quantity", field: "quantity"},
          {headerName: "Inventory", field: "inventory"},
          {headerName: "Supported", field: "supported"},
          {headerName: "Difference", field: "difference", aggFunc: this.differenceFunction},
          {headerName: "Amount", field: "amount", aggFunc: this.sumFunction, cellStyle: function(params) {
            if (params.value < 0) {
              return {backgroundColor: 'red'}
            } else if (params.value > 0) {
              return {backgroundColor: 'green'}
            }
          }},
      ],
      rowData: [
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},
      ],
    },
  }

  differenceFunction = (params) => {
    // const licenses = await client.query({
    //   query: getLogCount,
    //   variables: { args: ["oracle"]}
    // })

    // const management = await client.query({
    //   query: management,
    //   variables: { license, licenseType, quantity, listFee, discount, netFee, productSupportFee, softwareUpdateFee, otherFees, CDPackFee, unitPrice }
    // })

    // return parseInt(licenses) - parseInt(management.quantity);
  }

  sumFunction = (params) => {
    
  }

  updateData = data => {
    this.setState({rowData: data})
  }

  render() {
    const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
    return (
      <div>
        <Query
         query={getLogCount}
         variables={{channel: 'default', chaincode: 'end2end-05', chaincodeVer: '1.0', args: ["oracle"]}}
        >
          {({loading, error, data}) => {
            if (loading) return null;
            if (error) return `Error: ${error.message}`
            console.log(data.getLogCount)
            return (
              data.getLogCount
            )
          }}
        </Query>
        <Query query={getManagement}>
          {({ loading, error, data }) => {
              if (loading) return null;
              if (error) return `Error: ${error.message}`
              return (
                  Object.values(data.getManagement).map(form => {
                      console.log(form);
                  })
              )
          }}
        </Query>
        <ReconcileComponent
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
          logCount={this.logCount}
        />
      </div>
      );
  }
}

const enhancer = compose(
  withApollo
)

export default enhancer(ReconcileContainer);