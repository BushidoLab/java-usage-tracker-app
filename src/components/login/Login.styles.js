export const styles = theme => ({
    login: {
        display: 'flex',
        width: '100vw',
        height: '200vh',
        background: `linear-gradient(-45deg, #0F4D8A,
            ${theme.palette.primary[900]},
            ${theme.palette.primary[700]},
            ${theme.palette.primary[900]}   
    )`,
        justifyContent: 'center',
    },
    loginContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    logo: {
        width: 250,
        position: 'relative',
        marginLeft: 0,
        marginBottom: 5,
        marginTop: -30,
    },
    loginComponent: {
        boxShadow: '0 0 4px 0 rgba(60,69,73,0.25)',
        borderRadius: 5,
        width: 390,
        height: 350,
        margin: 50,
        padding: 20,
        background: 'rgb(240,240,240)'
    },
    loginWrapper: { height: '100%' },
    inputRow: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '50%',
        '& input': { color: theme.palette.grey[500] },
        '& [class*="Input-inputWrapper"]': { paddingLeft: 0 },
        '& [class*="Input-input"]': { width: '282px' },
        margin: "20px",
        marginTop: "50px",
    },
    submitRow: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: 50,
        '& button': { fontWeight: 'unset' },
        '& button:first-child': { paddingLeft: 0, textTransform: 'capitalize'}
    },
    submitBtn: {
        marginTop: -20,
        marginBottom: 50,
        width: '100%',
        display: 'block',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: [0, 20],
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: theme.palette.grey[100],
        marginTop: '20px',
        marginLeft: '-40px'
    },
    errorMessage: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        '& p': {
            margin: '10px 0 0 0',
            color: '#D64958',
            padding: '2px 5px',
        },
    },
    forgotPasswordBtn: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        display: 'block',
        textTransform: 'none',
        marginLeft: -25,
    },
    footerText: {
        color: 'black',
        marginTop: '30px',
        marginLeft: '30px',
        textDecoration: 'none'
    },
    email: {
        paddingBottom: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -50,
    },
    password: {
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    signup: {
        marginTop: 8,
        textTransform: 'none',
    }
});