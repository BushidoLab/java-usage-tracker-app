import React from 'react';
import injectSheet from 'react-jss';
import { Input, Button } from '@material-ui/core';
import { styles } from './SignUp.styles';

const SignUp = ({
    classes,
    cancelSignUp,
    handleChange,
    errorInput,
    errorInputText,
    handleSignUp,
    passwordError,
    passwordErrorText,
    handleInputChange,
    firstNameValue,
    lastNameValue,
    emailValue,
    errorMessages = [],
}) => (
    <div className={classes.signUpComponent}>
        <div className={classes.signUpWrapper}>
            <div className={classes.errorMessage}>
                {errorMessages.join() && <p>{errorMessages.join()}</p>}
            </div>
            <form
                className={classes.signUpFormContainer}
                onSubmit={handleSignUp}
            >
                <div className={classes.inputRow}>
                    <Input
                        id="firstNameInput"
                        name="firstName"
                        label="First Name"
                        placeholder="First Name"
                        onChange={handleInputChange}
                        value={firstNameValue}
                        className={classes.input}
                    />
                    <Input
                        id="lastNameInput"
                        name="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                        onChange={handleInputChange}
                        value={lastNameValue}
                        className={classes.input}
                    />
                    <Input
                        id="emailInput"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        onChange={handleChange}
                        error={errorInput}
                        helperText={errorInputText}
                        value={emailValue}
                        className={classes.input}
                    />
                    <Input
                        id="passwordInput"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        error={passwordError}
                        helperText={passwordErrorText}
                        className={classes.input}
                    />
                </div>
                <div className={classes.submitRow}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                    <Button variant="contained" color="primary" onClick={cancelSignUp}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    </div>
);

export default injectSheet(styles)(SignUp);
