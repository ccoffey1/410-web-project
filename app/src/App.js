import React, { Component } from 'react';
import Module from './components/Module'
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import { Typography, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '80vh'
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div>
        <Module title="Some shitty title" description=""/>
        </div>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}></Paper>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
