import React from 'react';
import injectSheet from 'react-jss';
import { Input, Button } from '@material-ui/core';
import { styles } from './Login.styles';
import Logo from '../../assets/veratrust.png';

const Login = ({ classes, handleLogin, handleChange, handleError, errorInputText, handleClick, emailValue, forgotPassword, errorMessages = [] }) => (
    <div className={classes.loginComponent}>
        <div className={classes.loginWrapper}>
            <div className={classes.errorMessage}>
                {errorMessages.join() && <p>{ errorMessages.join() }</p>}
            </div>
            <form className={classes.formContainer} onSubmit={handleLogin}>
                <img src={Logo} alt="Veratrust: Inspect, Verify, Validate and Trust" className={classes.logo} />
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
                        placeholder="Password"
                        required
                        onChange={handleChange}
                        className={classes.password}
                    />
                </div>
                <div className={classes.submitRow}>
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
            {/* <Button
                className={classes.forgotPasswordBtn}
                onClick={forgotPassword}
                variant="text"
            >
                Forgot Password?
            </Button> */}
        <div className={classes.footer}>
            <h5 className={classes.footerText}>Don't have an account?</h5>
            <Button onClick={handleClick}  color="primary" variant="text" className={classes.signup}>Sign Up</Button>
        </div>
    </div>
);

export default injectSheet(styles)(Login);