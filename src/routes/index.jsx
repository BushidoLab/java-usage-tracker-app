import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Management } from './Management';
import { Inspect } from './Inspect';
import Audit from '../components/audit/audit.component';
// import Route from './route_component';

export default _ => (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/audit">Audit</Link>
            <Link to="/management">Management</Link>
            <Link to="/inspect">Inspect</Link>
            
            <Switch>
                <Route exact path="/" />
                <Route path="/audit" component={Audit}/>
                <Route path="/management" component={Management} />
                <Route path="/inspect" component={Inspect} />
            </Switch>
        </div>
    </Router>
);
