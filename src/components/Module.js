import React, { Component } from 'react'
import Ball from './Ball';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Fab, Grow, Slide, Drawer, Divider } from '@material-ui/core';
import FinishModal from './FinishModal';
import Profile from './Profile';
import hljs from 'highlight.js/lib/highlight';
import java from 'highlight.js/lib/languages/java'
import 'highlight.js/styles/vs.css';

var ReactFitText = require('react-fittext');

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

  paperButtonContainer: {
    "& button": {
      textTransform: 'capitalize',
      color: 'white',
      margin: 5
    },
    position: 'absolute',
    bottom: '3%',
    right: '4%'
  },

  help: {
    '&:hover': {
      background: '#9b8428'
    },
    background: '#f4d142',
    width: '150px'
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

  title: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '2em'
  },

  preCodeBlock: {
    position: 'relative',
    display: 'block',
    width: '100%',
    background: 'black'
  }
})

// The actual module
export class Module extends Component {

  state = {
    success: false,
    helpVisible: false,
    openDialog: false,
    tries: 0,
    openProfile: false,
    submit: false,
    nextModule: false
  }
  
  // Show help
  showHelp = () => {
    this.setState({ helpVisible: true })
  }

  hideHelp = () => {
    this.setState({ helpVisible: false })
  }

  // Submit
  handleRunAndSubmit = () => {
    this.setState({ openDialog: true, tries: (this.state.tries + 1) })
  }

  // test submit with animation
  handleTestAnimation = () => {
    this.setState({
      success: true,
      submit: !this.state.submit
    });
  }

  //  go to next module
  handleNextModule = () => {
    this.setState({
      nextModule: !this.state.nextModule
    });
  }

  handleDialogClose = () => {
    this.setState({ openDialog: false })
  }

  // Profile
  handleProfileOpen = () => {
    this.setState({
      openProfile: true
    })
  }

  handleProfileClose = () => {
    this.setState({
      openProfile: false
    })
  }

    componentDidMount() {
      hljs.registerLanguage('java', java)
      hljs.highlightBlock(this.node)
    }

  render() {
    const { category, title, description, objectives, codeBlock, classes, hints } = this.props

    return (
      <div className={classes.root}>

        {/* Top Bar */}
        <div>
          <Slide direction="top" in={true} timeout={500}>
            <AppBar>
              <Toolbar>
                <Typography className={classes.grow} variant="h3" color="inherit">
                  {category}
                </Typography>
                <Button color="inherit" className={classes.button} onClick={this.handleProfileOpen}>
                  <i className="fas fa-book-open" style={{ marginRight: 10 }}></i>
                  My Story
                </Button>
              </Toolbar>
            </AppBar>
          </Slide>
        </div>

        <div className={classes.spacing}>
          <Grid container spacing={24}>
            <Grid item xs={4}>

              {/* First Section */}
              <Grow in={true} timeout={1000}>
                <Paper className={classes.paper} elevation={5}>
                  <div className={classes.title}>
                    {title}
                  </div>
                  <hr />
                  <p>
                    {description}
                  </p>
                  <hr />
                  <h2>Objectives</h2>
                  {objectives}
                </Paper>
              </Grow>
            </Grid>

            {/* Middle Section */}
            <Grow in={true} timeout={1500}>
              <Grid item xs={4}>
                <Paper className={classes.paper} elevation={5}>
                  <pre ref={(node) => this.node = node}>
                    <ReactFitText compressor={2.0}>
                        <code>
                          {codeBlock}
                        </code>
                    </ReactFitText>
                  </pre>
                  <div className={classes.paperButtonContainer}>
                    <Fab className={classes.help} onClick={this.showHelp} variant='extended'>
                      <div>
                        Hints
                        <i style={{display: 'block'}} className="fas fa-angle-down fa-lg"></i>
                      </div>
                    </Fab>
                    <Fab className={classes.btnSubmit} onClick={this.handleTestAnimation} color="secondary" variant="extended">
                      Run
                      <i className="fas fa-angle-right fa-lg" style={{ marginLeft: 10 }}></i>
                    </Fab>
                  </div>
                </Paper>
              </Grid>
            </Grow>

            {/* Last Section */}
            <Grow in={true} timeout={2000}>
              <Grid item xs={4}>
                <Paper className={classes.paper} elevation={5}>
                  <svg style={{ width: "300", height: "300", marginTop: "20" }}> <Ball x={this.state.submit ? 10 : 250} /> </svg>

                  <div className={classes.paperButtonContainer}>
                    <Fab className={classes.btnSubmit} onClick={this.handleNextModule} disabled ={!this.state.success} color="secondary" variant="extended">
                      Next
                      <i className="fas fa-angle-right fa-lg" style={{ marginLeft: 10 }}></i>
                    </Fab>
                  </div>
                </Paper>
              </Grid>
            </Grow>

            {/* Tips Drawer */}
            <Drawer
              anchor="bottom"
              open={this.state.helpVisible}
              onClose={this.hideHelp}>
              <p>
                <h1 style={{ marginLeft: 50, marginTop: 0 }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: 10, color: '#ffb420' }} />
                    Remember:
                  </h1>
                <hr />
                <div style={{ marginLeft: 50 }}>
                  {hints}
                </div>
              </p>
            </Drawer>
          </Grid>
        </div>

        {/* Dialog after submitting */}
        <FinishModal
          open={this.state.openDialog}
          onClose={this.handleDialogClose}
          hintRequested={this.showHelp}
          tries={this.state.tries}
          success={false}
        />

        {/* Profile Dialog */}
        <Profile
          open={this.state.openProfile}
          onClose={this.handleProfileClose}
        />
      </div>
    )
  }
}

export default withStyles(style)(Module)
