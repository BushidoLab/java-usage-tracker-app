import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { compose, withApollo, Query } from 'react-apollo';
import ReconcileComponent from './reconcile.component';
import { getManagement } from '../../graphql/queries/manage';
import { getLogCount } from '../../graphql/queries/logs';

class ReconcileContainer extends Component {
  state = {
    gridOptions: {
      columnDefs: [
          {headerName: "Publisher", field: "publisher", width: 230},
          {headerName: "Product Name", field: "productName", width: 230},
          {headerName: "License Type", field: "licenseType", width: 230},
          {headerName: "Quantity", field: "quantity", width: 230},
          {headerName: "Inventory", field: "inventory", width: 230},
          {headerName: "Supported", field: "supported", width: 230},
          {headerName: "Difference", field: "difference", width: 230, aggFunc: this.differenceFunction},
          {headerName: "Amount", field: "amount", width: 230, aggFunc: this.totalFunction, cellStyle: function(params) {
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

  differenceFunction = (quantity, count) => {
    return quantity.value - count.value;
  }

  totalFunction = () => {

  }

  render() {
    const { gridOptions, gridOptions: { columnDefs, rowData } } = this.state;
    return (
      <div>
        <Query
         query={getLogCount}
         variables={{channel: 'default', chaincode: 'NUPChaincode', chaincodeVer: '1.0', args: ["oracle"]}}
        >
          {({loading, error, data}) => {
            if (loading) return null;
            if (error) return `Error: ${error.message}`
            return (
              `Log count: ${data.getLogCount}`
            )
          }}
        </Query>
        <Query query={getManagement}>
          {({ loading, error, data }) => {
              let formArr = [];  
              if (loading) return null;
              if (error) return `Error: ${error.message}`
              Object.values(data.getManagement).map(form => {
                formArr.push(form)
              })
              console.log(formArr)
              return (
                  `Management forms: ${formArr.length}`
              )
          }}
        </Query>
        <ReconcileComponent
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

export default enhancer(ReconcileContainer);