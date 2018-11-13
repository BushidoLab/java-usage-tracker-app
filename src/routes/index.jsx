import React from 'react';
import { Switch } from 'react-router-dom';
import { Management } from './Management';
import { Audit } from './Audit';
import { Deploy } from './Deploy';
import { Profile } from './Profile';
import Route from './route_component';

export default _ => (
    <Switch>
        <Route path="/audit" exact component={Audit} />
        <Route path="/management" exact component={Management} />
        <Route path="/deploy" exact component={Deploy} />
        <Route path="/profile" exact component={Profile} />
    </Switch>
);
