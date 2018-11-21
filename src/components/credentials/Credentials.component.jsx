import React from 'react';
import injectSheet from 'react-jss';
import Login from '../login/Login.component';
import SignUp from '../sign_up/SignUp.component';
import { styles } from './Credentials.styles';

const CredentialsComponent = ({ classes, loggedIn, handleLogin, cancelSignUp, handleChange, errorInput, errorInputText, handleClick, handleSignUp, login, passwordError, passwordErrorText, handleInputChange, firstNameValue, lastNameValue, emailValue }) => (
    <div className={classes.auth}>
        <div className={classes.authContainer}>
            {
                login
                    ? (
                        <Login
                            loggedIn={loggedIn}
                            handleLogin={handleLogin}
                            handleChange={handleChange}
                            handleError={errorInput}
                            errorInputText={errorInputText}
                            handleClick={handleClick}
                            emailValue={emailValue}
                        />
                    )
                    : (
                        <SignUp
                            cancelSignUp={cancelSignUp}
                            handleChange={handleChange}
                            errorInput={errorInput}
                            errorInputText={errorInputText}
                            handleSignUp={handleSignUp}
                            passwordError={passwordError}
                            passwordErrorText={passwordErrorText}
                            handleInputChange={handleInputChange}
                            firstNameValue={firstNameValue}
                            lastNameValue={lastNameValue}
                            emailValue={emailValue}
                        />
                    )
            }
        </div>
    </div>
);

export default injectSheet(styles)(CredentialsComponent);
