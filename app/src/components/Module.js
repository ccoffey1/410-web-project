import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Fab, BottomNavigation } from '@material-ui/core';

// Inline styles for React components.
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

  btnSubmit: {
    textTransform: 'capitalize',
    position: 'absolute',
    color: 'white',
    bottom: '3%',
    right: '4%',
    fontSize: '1.3em'
  },

  spacing: {
    flexGrow: 1,
    marginTop: 67
  },

  paper: {
    position: 'relative',
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.primary,
    height: '65vh',
    overflow: 'auto'
  },

  paperfooter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.primary,
    height: '13vh',
    overflow: 'auto'
  },

  title: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '2em'
  }
})

// The actual module
export class Module extends Component {

    // Submit
    runAndSubmit = () => {
        // Todo: Check if user completed activity  
    }
    
  render() {
    const {category, title, description, classes, hints} = this.props

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
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <div className={classes.title}>
                  {title}
                </div>
                <hr/>
                <div>
                  {description}
                </div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Fab className={classes.btnSubmit} color="secondary" variant="extended" outlined="secondary">
                  <i class="far fa-check-circle fa-lg" style={{marginRight: 10}}></i>Run & Submit
                </Fab>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paperfooter}>
                <h2><i class="fas fa-exclamation-triangle" style={{marginRight: 10, color: '#ffb420'}}/>Remember:</h2>
                {hints}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paperfooter}></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(style)(Module)
