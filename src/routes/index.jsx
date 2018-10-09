import React from 'react';
import { Switch } from 'react-router-dom';
import { Management } from './Management';
import { Inspect } from './Inspect';
import Route from './route_component';

export default _ => (
    <Switch>
        <Route path="/management" component={Management} />
        <Route exact path="/inspect" component={Inspect} />
    </Switch>
);
