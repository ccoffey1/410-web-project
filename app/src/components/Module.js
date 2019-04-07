import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Fab, BottomNavigation, Grow, Slide, IconButton, Icon } from '@material-ui/core';

// Inline styles for React components.
const style = theme => ({
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
    background: 'helpcolor'
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
    paddingTop: 0,
    textAlign: 'left',
    color: theme.palette.text.primary,
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

        <Slide direction="left" in={true} timeout={500}>
          <AppBar>
            <Toolbar>
              <Typography className={classes.grow} variant="h3" color="inherit">
                {category}
              </Typography>
              <Button color="inherit" className={classes.button}>
                <i className="fas fa-book-open" style={{marginRight: 10}}></i>My Story
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
                    <i class="far fa-check-circle fa-lg" style={{marginRight: 10}}></i>Run & Submit
                  </Fab>
                </Paper>
              </Grid>
            </Grow>

            <Grow in={true} timeout={1000}>
              <Grid item xs={4}>
                <Paper className={classes.paperfooter} elevation={5}>
                  <h2>
                    <i class="fas fa-exclamation-triangle" style={{marginRight: 10, color: '#ffb420'}}/>
                    Remember:
                  </h2>
                  {hints}
                </Paper>
              </Grid>
            </Grow>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(style)(Module)
