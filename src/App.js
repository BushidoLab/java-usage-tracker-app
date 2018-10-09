import React from 'react';
import { jss, JssProvider, createGenerateClassName } from 'react-jss';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ApolloClient from './graphql/ApolloClient';
import { Dashboard } from './pages';
import Routes from './routes';
import './App.css';
import { Management } from './routes/Management';

const generateClassName = createGenerateClassName();
const AppTheme = createMuiTheme({ palette: { type: 'dark' } });

const App = _ => (
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <ApolloProvider client={ApolloClient}>
            <MuiThemeProvider theme={AppTheme}>
                <Router>
                    <Switch>
                        <Dashboard>
                            <Route path="/management" render={_ => <Redirect to="/management" />} />
                            <Route path="/inspect" render={_ => <Redirect to="/inspect" />} />
                            <Routes />
                        </Dashboard>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </ApolloProvider>
    </JssProvider>
);

export default App;
