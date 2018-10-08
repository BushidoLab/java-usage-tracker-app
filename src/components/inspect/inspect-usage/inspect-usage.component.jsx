const UsageComponent = () => {
  <MuiThemeProvider>
    <Card className={classes.card}>
      <CardHeader title="Usage Information" subheader="Showing detailed usage information"/>
      <CardContent>
        <Typography component="p">Version: 1.8.081</Typography>
      </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">Sample text</Typography>
              <Typography paragraph>Sample text</Typography>
              <Typography>Sample text</Typography>
              <Typography><h2>Sample text</h2></Typography>
              <Typography>Sample text</Typography>
            </CardContent>
        </Collapse>
    </Card>
  </MuiThemeProvider>
}