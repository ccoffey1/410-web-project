import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, Typography, Slide, IconButton, Paper, Grid } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

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
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}>
            <AppBar style={{position: 'relative'}}>
              <Toolbar>
                <Typography variant="h6" color="inherit" style={{flex: 1}}>
                    My Story
                </Typography>
                <Typography variant="h6" color="inherit" style={{flex: 0.5}}>
                    Progress
                </Typography>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                    <i class="fas fa-times fa-lg"></i>
                </IconButton>
              </Toolbar>
            </AppBar>
        </Dialog>
      <Grid container>
      <Grid item>
      <Paper></Paper>
      </Grid>

      </Grid>
      </div>
    )
  }
}
