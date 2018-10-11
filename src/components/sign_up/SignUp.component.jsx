import React from 'react';
import injectSheet from 'react-jss';
import { Input, Button } from '@material-ui/core';
import { styles } from './SignUp.styles';

//SIGN UP PAGE HAS NOT BEEN WIRED INTO APP

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
                        id="emailInput"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        onChange={handleChange}
                        error={errorInput}
                        helperText={errorInputText}
                        value={emailValue}
                    />
                    <Input
                        id="passwordInput"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        error={passwordError}
                        helperText={passwordErrorText}
                    />
                    <Input
                        id="firstNameInput"
                        name="firstName"
                        label="First Name"
                        placeholder="First Name"
                        onChange={handleInputChange}
                        value={firstNameValue}
                    />
                    <Input
                        id="lastNameInput"
                        name="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                        onChange={handleInputChange}
                        value={lastNameValue}
                    />
                </div>
                <div className={classes.submitRow}>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                    <Button variant="contained" onClick={cancelSignUp}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    </div>
);

export default injectSheet(styles)(SignUp);
