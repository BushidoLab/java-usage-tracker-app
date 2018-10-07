import React from 'react';
import { Switch } from 'react-router-dom';
import { Management } from './Management';
import Route from './route_component';

export default _ => (
    <Switch>
        <Route path="/management" component={Management} />
    </Switch>
);
