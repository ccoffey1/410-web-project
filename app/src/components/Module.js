import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Fab, BottomNavigation, Grow, Slide, IconButton, Icon, Collapse, Fade } from '@material-ui/core';

// Inline styles for React components.
const style = theme => ({
  root: {
    position: 'relative',
    padding: 20,
    overflow: 'auto'
  },

  grow: {
    flexGrow: 1,
    textAlign: 'left'
  },

  button: {
    textTransform: 'capitalize',
    background: '#72bbf8'
  },

  btnSubmit: {
    textTransform: 'capitalize',
    position: 'absolute',
    color: 'white',
    bottom: '3%',
    right: '4%',
  },

  btnHelp: {
    display: 'block',
    textTransform: 'capitalize',
    position: 'absolute',
    background: '#ffb420',
    color: 'white',
    width: '30%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    bottom: '3%',
    "&:hover": {
      background: '#bf8200'
    }
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
    height: '83vh',
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

  state = {
    helpVisible: false
  }

    // Submit
    runAndSubmit = () => {
        // Todo: Check if user completed activity  
    }
    
    // Show help
    showHelp = () => {
      this.setState(state => ({ helpVisible: !state.helpVisible }))
    }

  render() {
    const {category, title, description, classes, hints} = this.props
    const { helpVisible } = this.state

    return (
      <div className={classes.root}>

        <Slide direction="left" in={true} timeout={500}>
          <AppBar>
            <Toolbar>
              <Typography className={classes.grow} variant="h3" color="inherit">
                {category}
              </Typography>
              <Button color="inherit" className={classes.button}>
                <i className="fas fa-book-open" style={{marginRight: 10}}></i>
                My Story
              </Button>
            </Toolbar>
          </AppBar>
        </Slide>

        <div className={classes.spacing}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
            <Grow in={true} timeout={1000}>
                <Paper className={classes.paper} elevation={5}>
                  <div className={classes.title}>
                    {title}
                  </div>
                  <hr/>
                  <div>
                    {description}
                  </div>
                  <div>
                    <Fab className={classes.btnHelp} variant='extended' onClick={this.showHelp}>
                      Stuck?
                      <i style={{display: 'block'}} class="fas fa-angle-down fa-lg"></i>
                    </Fab>
                  </div>
                </Paper>
            </Grow>
            </Grid>

            <Grow in={true} timeout={1500}>
              <Grid item xs={4}>
                <Paper className={classes.paper} elevation={5} />
              </Grid>
            </Grow>

            <Grow in={true} timeout={2000}>
              <Grid item xs={4}>
                <Paper className={classes.paper} elevation={5}>
                  <Fab className={classes.btnSubmit} color="secondary" variant="extended">
                    Run & Submit
                    <i class="fas fa-angle-right fa-lg" style={{marginLeft: 10}}></i>
                  </Fab>
                </Paper>
              </Grid>
            </Grow>

            <Grid item xs={4}>
              <Collapse in={helpVisible} timeout={1000}>
                <p className={classes.paperfooter} elevation={5}>
                  <h2>
                    <i class="fas fa-exclamation-triangle" style={{marginRight: 10, color: '#ffb420'}}/>
                    Remember:
                  </h2>
                  {hints}
                </p>
              </Collapse>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(style)(Module)
