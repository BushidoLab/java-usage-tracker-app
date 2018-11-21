export const styles = theme => ({
    auth: {
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
    authContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    logo: {
        postion: 'relative',
        width: 170,
        marginLeft: 10,
        marginBottom: 5
    },
});