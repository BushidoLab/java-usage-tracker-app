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
        width: 170,
        marginLeft: 10,
        marginBottom: 5,
    },
    signUpComponent: {
        background: '#fff',
        boxShadow: '0 0 4px 0 rgba(60,69,73,0.25)',
        width: 390,
        height: 280,
        display: 'block',
        margin: '30px auto',
    },
    signUpWrapper: {
        height: '100%',
    },
    signUpFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: 'rgb(240,240,240)',
        borderRadius: 5,
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '50%',
        paddingTop: 20,
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
        marginTop: 40,
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
});
