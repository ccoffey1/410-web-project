import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, Typography, Slide, IconButton, Paper, Grid, Button } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

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

const lightBlueStyle = {
  margin: 20,
  backgroundColor: '#72bbf8'
}

const greenStyle = {
  backgroundColor: '#5ec95c',
  color: '#fafafa'
}
const orangeStyle = {
  margin: 20,
  backgroundColor: '#ffb420'
}

const blueStyle = {
  margin: 20,
  backgroundColor: '#2196f3',
  color: '#fafafa'
}

const grayStyle = {
  margin: 20,
  color: '#616161'
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class Profile extends Component {

  handleClose = () => {
    this.props.onClose();
  }

  verticalLine = {
    position: 'absolute',
    borderLeft: '6px solid',
    borderColor: '#FEDEDE',
    height: '100vh',
    right: '38%'
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
            </Paper>
          </Grid>
          <Grid item style={gridStyle} xs={8}>
            <Paper style={paperStyle}>
                  <Typography variant="display1" style={grayStyle}> Modules Completed </Typography>
                  <Typography variant="subtitle1" style={{ marginLeft: 20, marginTop: 0 }}> Click the module to replay </Typography>
                  <Link to="/Module1"><Typography variant="h5" style={{margin: 20}}> Module 1 - Variables </Typography></Link>
                  <Link to="/Module2"><Typography variant="h5" style={{margin: 20}}> Module 2 - If statement </Typography></Link>
                  <Link to="/Module3"><Typography variant="h5" style={{margin: 20}}> Module 3 - If else statement </Typography></Link>
                  <Link to="/Module4"><Typography variant="h5" style={{margin: 20}}> Module 4 - While loop </Typography></Link>
                  <Link to="/Module5"><Typography variant="h5" style={{margin: 20}}> Module 5 - For loop </Typography></Link>
            </Paper>
          </Grid>
        </Grid>
        </Dialog>
      </div>
    )
  }
}
