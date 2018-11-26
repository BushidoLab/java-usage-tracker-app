export const styles = theme => ({
    signup: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(-45deg, #0F4D8A,
            ${theme.palette.primary[900]},
            ${theme.palette.primary[700]},
            ${theme.palette.primary[900]},
    )`,
        justifyContent: 'center',
    },
    signUpContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    logo: {
        postion: 'relative',
        width: 250,
        marginLeft: 10,
        marginBottom: 5,
        marignTop: -150
    },
    signUpComponent: {
        background: '#fff',
        boxShadow: '0 0 4px 0 rgba(60,69,73,0.25)',
        width: 390,
        height: 350,
        display: 'block',
        margin: '30px auto',
    },
    signUpWrapper: {
        height: '100%',
    },
    signUpFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '150%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: 'rgb(240,240,240)',
        borderRadius: 5,
        padding: 20
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '50%',
        marginTop: -20,
        '& input': {
            color: theme.palette.grey[500],
            paddingTop: 2,
        },
        '& [class*="Input-inputWrapper"]': {paddingLeft: 0,},
        '& [class*="Input-input"]': {width: '262px',},
    },
    submitRow: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        marginTop: 50,
        '& button': {fontWeight: 'unset',},
    },
    errorMessage: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        '& p': {
            display: 'inline',
            textAlign: 'center',
            margin: '10px 0 0 0',
            color: '#D64958',
            fontSize: '13px',
            padding: '2px 5px',
        },
    },
    input: {
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20
    }
});
