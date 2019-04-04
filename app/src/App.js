import React, { Component } from 'react';
import Module from './components/Module'
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  }
});

class App extends Component {
  render() {

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Module />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
