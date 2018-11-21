export const styles = theme => ({
  header: {
    margin: "20px 0 0 20px",
    fontFamily: "Roboto",
    letterSpacing: "0.1px",
    fontWeight: "100",
    color: "#444"
  },
  subHeader: {
    margin: "10px 0 -20px 20px",
    color: "#AAA",
    letterSpacing: "-1px",
  },
  loader: {
    border: "1px solid black",
    letterSpacing: "10px",
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  button: {
    marginLeft: "15px",
    marginTop: "50px",
  }
})