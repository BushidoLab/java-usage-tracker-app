import React from 'react';
import { jss, JssProvider, createGenerateClassName } from 'react-jss';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import ApolloClient from './graphql/ApolloClient';
import { Auth } from './components/credentials/Auth';
import { Dashboard, AuthContainer } from './pages';
import Routes from './routes';
import './App.css';

const generateClassName = createGenerateClassName();
const AppTheme = createMuiTheme({ 
    palette: { type: 'dark' }, 
    typography: { 
        useNextVariants: true,
        fontFamily: ['Roboto'] 
    }
 });

const App = _ => (
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <ApolloProvider client={ApolloClient}>
            <MuiThemeProvider theme={AppTheme}>
                <Router>
                    <Switch>
                        <Route path="/login" exact component={AuthContainer} />
                        <Auth>
                            <Dashboard>
                                <Route exact path="/" render={() => <Redirect to="/management" />} />
                                <Routes />
                            </Dashboard>
                        </Auth>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </ApolloProvider>
    </JssProvider>
);

export default App;
