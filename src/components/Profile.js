import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, Typography, Slide, IconButton, Paper, Grid, Fab, withStyles, Checkbox, Button, Tooltip } from '@material-ui/core';
import { Redirect } from "react-router-dom"
import OtherStories from './OtherStories';
import { defaultCipherList } from 'constants';

const styles = theme => ({
  innerContainer: {
    position: 'relative',
    padding: 20,
    overflow: 'auto'
  },

  containerPadding: {
    padding: theme.spacing.unit
  },

  title: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '2em'
  },

  grow: {
    flexGrow: 1,
    textAlign: 'left',
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
    overflow: 'auto'
  },

  otherStoriesBtnStyle: {
    position: 'absolute',
    color: 'white',
    textTransform: 'capitalize',
    bottom: '5%',
    right: '5%'
  },

  moduleButton: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    fontSize: '1.2em',
    textTransform: 'capitalize'
  }
})

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Profile extends Component {

  state = {
    otherStoriesOpened: false,
    redirect: null
  }

  handleClose = () => {
    this.props.onClose();
  }

  handleOtherStoriesClosed = () => {
    this.setState({
      otherStoriesOpened: false
    })
  }

  showOtherStories = () => {
    this.setState({
      otherStoriesOpened: true
    })
  }

  moduleRedirect = () => {
    switch (this.state.redirect) {
      case "mod1":
        return <Redirect push to="/Module1"/>

      case "mod2":
        return <Redirect push to="/Module2"/>

      case "mod3":
        return <Redirect push to="/Module3"/>

      case "mod4":
        return <Redirect push to="/Module4"/>

      default:
    }
  }

  render() {
    const { open, classes } = this.props;

    return (
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}>

          <div className={classes.innerContainer}>

            {/* Top Bar */}
            <AppBar className={{ position: 'relative' }}>
              <Toolbar>
                <Typography variant="h4" color="inherit" className={classes.grow}>
                  My Story
                </Typography>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                  <i class="fas fa-times fa-lg"></i>
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* Your Story */}
            <div className={classes.spacing}>
              <Grid container spacing={16}>
                <Grid item className={classes.gridStyle} xs={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.title}>
                      Your Story So Far 
                    </div>
                    <hr/>
                    <p> 
                      Mysteriously, an orange ball appeared in your backyard.
                    </p>
                    <Fab className={classes.otherStoriesBtnStyle} onClick={this.showOtherStories} variant="extended" color="secondary">
                      <i className="fas fa-book-open" style={{ marginRight: 10 }}></i>
                      Check out other users' stories
                    </Fab>
                  </Paper>
                </Grid>
                <Grid item className={classes.gridStyle} xs={8}>
                  <Paper className={classes.paper}>
                    <div className={classes.title}>
                      Your Progress
                    </div>
                    <hr/>
                    <div>
                      <Button className={classes.moduleButton} onClick={ this.handleClose }> <Checkbox checked={true}/> Module 1 - Variables </Button>
                      <Button className={classes.moduleButton} href="/Module2" disabled> <Checkbox checked={false} disabled/> Module 2 - If statement </Button>
                      <Button className={classes.moduleButton} href="/Module3" disabled> <Checkbox checked={false} disabled/> Module 3 - If else statement </Button>
                      <Button className={classes.moduleButton} href="/Module4" disabled> <Checkbox checked={false} disabled/> Module 4 - While loop </Button>
                      <Button className={classes.moduleButton} href="/Module5" disabled> <Checkbox checked={false} disabled/> Module 5 - For loop </Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        </Dialog>

        {/* Other Stories Dialog */}
        <OtherStories
          open={this.state.otherStoriesOpened}
          onClose={this.handleOtherStoriesClosed}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Profile)

