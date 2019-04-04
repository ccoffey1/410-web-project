import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Paper } from '@material-ui/core';

// This is the last time I use inline styles. We're going to start using App.css. This is disgusting.
const style = theme => ({
  grow: {
    flexGrow: 1,
    textAlign: 'left'
  },

  button: {
    textTransform: 'capitalize',
    fontSize: '1.3em',
    height: '10%',
    background: '#72bbf8'
  },

  spacing: {
    flexGrow: 1,
    marginTop: 67
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.primary,
    height: '80vh',
  },

  title: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '2em'
  }
})

export class Module extends Component {

    // Submit
    runAndSubmit = () => {
        // Todo: Check if user completed activity  
    }
    
  render() {
    const {category, title, description, classes} = this.props

    return (
      <div style={{position: 'relative', padding: 20}}>
        <AppBar>
          <Toolbar>
            <Typography className={classes.grow} variant="h4" color="inherit">
              {category}
            </Typography>
            <Button color="inherit" className={classes.button}>
              <i className="fas fa-book-open" style={{marginRight: 10}}></i>My Story
            </Button>
          </Toolbar>
        </AppBar>

        <div className={classes.spacing}>
          <Grid container spacing={24}>
            <Grid item xs>
              <Paper className={classes.paper}>
              <div className={classes.title}>
                {title}
              </div>
              <hr />
              <div>
                {description}
              </div>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(style)(Module)
