import React, { Component } from 'react';
import { compose, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import CredentialsComponent from '../../components/credentials/Credentials.component';
import { login, signUp } from '../../graphql/mutations/auth';

class LoginContainer extends Component {
    state = {
        loggedIn: false,
        errorInput: false,
        errorInputText: String(),
        passwordError: false,
        passwordErrorText: String(),
        login: true,
        firstName: String(),
        lastName: String(),
        email: String(),
        password: String(),
    }

    cancelSignUp = _ => {
        this.setState({ login: true });
    };

    handleChange = ({ target: { value, name } }) => {
        // const validInput = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // const isValid = value.match(validInput);
        this.setState({
            // errorInput: !isValid,
            // errorInputText: isValid ? String() : 'Please enter a valid email address',
            [name]: value,
        });
    };

    handleClick = _ => {
        this.setState({ login: false });
    };

    handleSignUp = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const { client } = this.props;
        if (!email || !password || !firstName || !lastName) return;
        if (password.length < 6) {
            this.setState({
                passwordError: true,
                passwordErrorText: 'Your password must contain 6 characters',
            });
            return;
        }
        const { data: { signUp: { token } } } = await client.mutate({
            mutation: signUp,
            variables: { email, password, firstName, lastName },
        });
        this.authComplete({ token });
    };

    handleInputChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    };

    handleLogin = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { client } = this.props;
        try {
            const { data: { login: { token } } } = await client.mutate({
                mutation: login,
                variables: { email, password },
            });
            this.authComplete({ token });
        } catch (error) {
            console.log(error);
        }
    };

    authComplete = ({ token }) => {
        const { history } = this.props;
        sessionStorage.setItem('authToken', token);
        this.setState({ loggedIn: !!token });
        history.push('/management');
    };

    render() {
        const {
            errorInput,
            passwordError,
            passwordErrorText,
            errorInputText,
            login,
            firstName,
            lastName,
            email,
        } = this.state;
        return (
            <CredentialsComponent
                handleLogin={this.handleLogin}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                handleSignUp={this.handleSignUp}
                cancelSignUp={this.cancelSignUp}
                handleInputChange={this.handleInputChange}
                errorInput={errorInput}
                errorInputText={errorInputText}
                passwordError={passwordError}
                passwordErrorText={passwordErrorText}
                login={login}
                firstNameValue={firstName}
                lastNameValue={lastName}
                emailValue={email}
            />
        );
    }
}

const enhancer = compose(
    withApollo,
    withRouter,
);

export default enhancer(LoginContainer);