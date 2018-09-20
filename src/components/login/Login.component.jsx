import React from 'react';
import injectSheet from 'react-jss';
import { Input, Button } from '@material-ui/core';
import { styles } from './Login.styles';

//**LOGIN COMPONENT HAS NOT BEEN WIRED INTO APP

const Login = ({ classes, handleLogin, handleChange, handleError, errorInputText, handleClick, emailValue, forgotPassword, errorMessages = [] }) => (
    <div className={classes.loginComponent}>
        <div className={classes.loginWrapper}>
            <div className={classes.errorMessage}>
                {errorMessages.join() && <p>{ errorMessages.join() }</p>}
            </div>
            <form className={classes.formContainer} onSubmit={handleLogin}>
                <div className={classes.inputRow}>
                    <Input
                        id="emailInput"
                        name="email"
                        label="Email"
                        error={handleError}
                        onChange={handleChange}
                        helperText={errorInputText}
                        value={emailValue}
                    />
                    <Input
                        id="passwordInput"
                        name="password"
                        label="Password"
                        type="password"
                    />
                </div>
                <div className={classes.submitRow}>
                    <Button
                        className={classes.forgotPasswordBtn}
                        onClick={forgotPassword}
                    >
                        Forgot Password?
                    </Button>
                    <Button
                        className={classes.submitBtn}
                        variant="raised"
                        type="submit"
                    >
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
        <div className={classes.footer}>
            <h5>Don't have an account?</h5>
            <Button onClick={handleClick}>Sign Up</Button>
        </div>
    </div>
);

export default injectSheet(styles)(Login);