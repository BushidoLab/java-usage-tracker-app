export const styles = theme => ({
    login: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
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
        width: 170,
        position: 'relative',
        marginLeft: 10,
        marginBottom: 5
    },
    loginComponent: {
        boxShadow: '0 0 4px 0 rgba(60,69,73,0.25)',
        borderRadius: 5,
        width: 390,
        height: 250,
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
        marginBottom: 50
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
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.grey[100],
        margin: '20px'
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
        marginBottom: 50,
    },
    footerText: {
        color: 'black',
        margin: '30px'
    },
    email: {
        paddingTop: 20,
        paddingBottom: 20,
        margin: 20
    },
    password: {
        paddingTop: 20,
        paddingBottom: 20,
        margin: 20
    }
});