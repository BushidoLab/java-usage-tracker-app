import React from 'react';
import injectSheet from 'react-jss';
import { Input, Button } from '@material-ui/core';
import { styles } from './Login.styles';

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
                        placeholder="Email"
                        required
                        error={handleError}
                        onChange={handleChange}
                        className={classes.email}
                        value={emailValue}
                    />
                    <Input
                        id="passwordInput"
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                        onChange={handleChange}
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
                        variant="contained"
                        type="submit"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
        <div className={classes.footer}>
            <h5 className={classes.footerText}>Don't have an account?</h5>
            <Button onClick={handleClick}  color="primary" variant="contained">Sign Up</Button>
        </div>
    </div>
);

export default injectSheet(styles)(Login);