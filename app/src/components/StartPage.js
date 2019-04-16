import React, { Component } from 'react'
import { Grid, Paper, Typography, AppBar, Toolbar, Button, TextField } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#5ec95c'
    }
  }
});

const root = {
  flexGrow: 1
}
const paperStyle = {
  flexGrow: 1,
  marginTop: 45,
  marginLeft: 10,
  marginRight: 10,
  position: 'relative',
  textAlign: 'center',
  color: theme.palette.text.primary,
  overflow: 'auto'
}
const homeButton = {
  marginLeft: -12,
  marginRight: 20
}
const submitStyle = {
  margin: 15,
};

// The page
export class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <div style={root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <AppBar>
                <Toolbar>
                  <Button color="inherit" style={homeButton}>
                    <i className="fas fa-qrcode" style={{ marginRight: 10 }}></i>
                    UCode
                  </Button>
                  <Typography variant="h3" color="inherit" style={root}>
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              <Paper style={paperStyle} height="100%">
                <h1>Welcome to UCode!</h1>
                <Typography component="p">
                  Learn to code in Java
            </Typography> <div>
                  <AppBar
                    title="Login"
                  />
                  <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange={(event, newValue) => this.setState({ username: newValue })}
                  />
                  <br />
                  <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) => this.setState({ password: newValue })}
                  />
                  <br />
                  <Button label="Submit" primary={true} style={submitStyle} onClick={(event) => this.handleClick(event)} />
                </div>

              </Paper>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}
