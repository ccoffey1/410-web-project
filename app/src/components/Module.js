import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const style = {
  grow: {
    flexGrow: 1,
    textAlign: 'left'
  },

  button: {
    textTransform: 'capitalize',
  },

  spacing: {
    
  }
}

export class Module extends Component {

    // Submit
    runAndSubmit = () => {
        // Todo: Check if user completed activity  
    }

  render() {
    const {title, description, classes} = this.props

    return (
      <div>
        <AppBar className={classes.spacing}>
          <Toolbar>
            <Typography className={classes.grow} variant="h4" color="inherit">
              {title}
            </Typography>
            <Button color="inherit" className={classes.button}>
              My Story
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(style)(Module)
