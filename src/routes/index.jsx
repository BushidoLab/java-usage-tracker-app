import React from 'react';
import { Switch } from 'react-router-dom';
import { Management } from './Management';
import { Inspect } from './Inspect';
import { Audit } from './Audit';
import { Reconcile } from './Reconcile';
import { Profile } from './Profile';
import Route from './route_component';

export default _ => (
    <Switch>
        <Route path="/audit" exact component={Audit} />
        <Route path="/management" exact component={Management} />
        <Route path="/inspect" exact component={Inspect} />
        <Route path="/reconcile" exact component={Reconcile} />
        <Route path="/profile" exact component={Profile} />
    </Switch>
);
