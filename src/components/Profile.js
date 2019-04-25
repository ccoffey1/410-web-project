import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, Typography, Slide, IconButton, Paper, Grid, Button, Fab } from '@material-ui/core';
import { Link } from "react-router-dom"
import OtherStories from './OtherStories';

const root = {
  flexGrow: 1
}

const gridStyle = {
  direction: 'row',
  textAlign: 'left',
  overflow: 'auto'
}

const paperStyle = {
  flexGrow: 1,
  position: 'relative',
  textAlign: 'left',
  height: '83vh',
  overflow: 'auto'
}

const otherStoriesBtnStyle = {
  position: 'absolute',
  color: 'white',
  textTransform: 'capitalize',
  bottom: '5%',
  right: '5%'
}

const isDisabled = {
  margin: 20,
  color: '#BDBDBD'
}

const grayStyle = {
  margin: 20,
  color: '#616161'
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class Profile extends Component {

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
    const { open } = this.props;

    return (
      <div style ={root}>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}>
          <AppBar style={{ position: 'relative' }}>
            <Toolbar>
              <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
                My Story
                </Typography>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <i class="fas fa-times fa-lg"></i>
              </IconButton>
            </Toolbar>
          </AppBar>
        <Grid container spacing={16}>
        <Grid item xs={12}></Grid>
          <Grid item style={gridStyle} xs={4}>
            <Paper style={paperStyle}>
              <Typography variant="display1" style={grayStyle}> Your Story So Far </Typography>
              <Typography variant="body1" style={{ margin: 20 }}> Jane bought a green hat today. </Typography>
              <Fab style={otherStoriesBtnStyle} onClick={this.showOtherStories} variant="extended" color="secondary">
                <i className="fas fa-book-open" style={{ marginRight: 10 }}></i>
                Check out other users' stories
              </Fab>
            </Paper>
          </Grid>
          <Grid item style={gridStyle} xs={8}>
            <Paper style={paperStyle}>
                  <Typography variant="display1" style={grayStyle}> Modules Completed </Typography>
                  <Link to="/Module1" style={{color: '#1565C0'}} onClick = {this.handleClose}><Typography variant="h5" style={{color: '#1565C0', margin: 20}}> Module 1 - Variables </Typography></Link>
                  <Link to="/Module2" style={{ color: '#BDBDBD', pointerEvents: "none"}} onClick={e => e.preventDefault()} > <Typography variant="h5" style={isDisabled}> Module 2 - If statement </Typography></Link>
                  <Link to="/Module3" style={{ color: '#BDBDBD', pointerEvents: "none"}} onClick={e => e.preventDefault()}> <Typography variant="h5" style={isDisabled}> Module 3 - If else statement </Typography></Link>
                  <Link to="/Module4" style={{ color: '#BDBDBD', pointerEvents: "none"}} onClick={e => e.preventDefault()}> <Typography variant="h5" style={isDisabled}> Module 4 - While loop </Typography></Link>
                  <Link to="/Module5" style={{ color: '#BDBDBD', pointerEvents: "none"}} onClick={e => e.preventDefault()}> <Typography variant="h5" style={isDisabled}> Module 5 - For loop </Typography></Link>
            </Paper>
          </Grid>
        </Grid>
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
