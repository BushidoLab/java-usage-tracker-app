export const styles = theme => ({
  card: {
    display: 'block',
    width: '90%',
    margin: '5%'
  },
  header: {
    display: 'flex'
  },
  left: {
    // display: 'flex',
    // width: '40%',
    // position: 'left'
  },
  right: {
    // display: 'flex',
    // width: '40%',
    // position: 'right'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});
