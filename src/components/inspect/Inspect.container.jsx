
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tab';
import Tab from '@material-ui/core/Tab';
import InspectProductComponent from './inspect-product/Inspect-product.component';
// import Usage from "./usage";

const InspectContainer = () => (
  <Paper>
    <Tabs>
      <Tab label="Inspect Product" />
      <Tab label="Inspect Usage" />
    </Tabs>
  </Paper>
);

export default InspectContainer;
