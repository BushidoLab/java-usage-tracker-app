
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tab';
import Tab from '@material-ui/core/Tab';
import InspectProductComponent from './inspect-product/inspect-product.component';
import { UsageComponent } from './inspect-usage/inspect-usage.component';

const InspectContainer = () => (
  <Paper>
    <Tabs>
      <Tab label="Inspect Product" component={InspectProductComponent}/>
      <Tab label="Inspect Usage" component={UsageComponent} />
    </Tabs>
  </Paper>
);

export default InspectContainer;
