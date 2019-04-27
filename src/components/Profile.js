import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, Typography, Slide, IconButton, Paper, Grid, Fab, withStyles, Checkbox } from '@material-ui/core';
import { Link } from "react-router-dom"
import OtherStories from './OtherStories';

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

  disabled: {
    "& h5": {
      color: '#BDBDBD',
      marginTop: '20px'
    },
    color: '#BDBDBD'
  }
})


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Profile extends Component {

  state = {
    otherStoriesOpened: false
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

  render() {
    const { open, classes } = this.props;

    console.log(classes)

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
                      Modules Completed
                    </div>
                    <hr/>
                    <Link to="/Module1" onClick={this.handleClose}> <Typography variant="h5"> <Checkbox checked={true}/> Module 1 - Variables </Typography></Link>
                    <Link to="/Module2" className={classes.disabled} onClick={e => e.preventDefault()}> <Typography variant="h5"> <Checkbox checked={false} disabled onClick={e => e.preventDefault()}/> Module 2 - If statement </Typography></Link>
                    <Link to="/Module3" className={classes.disabled} onClick={e => e.preventDefault()}> <Typography variant="h5"> <Checkbox checked={false} disabled onClick={e => e.preventDefault()}/> Module 3 - If else statement </Typography></Link>
                    <Link to="/Module4" className={classes.disabled} onClick={e => e.preventDefault()}> <Typography variant="h5"> <Checkbox checked={false} disabled onClick={e => e.preventDefault()}/> Module 4 - While loop </Typography></Link>
                    <Link to="/Module5" className={classes.disabled} onClick={e => e.preventDefault()}> <Typography variant="h5"> <Checkbox checked={false} disabled onClick={e => e.preventDefault()}/> Module 5 - For loop </Typography></Link>
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

