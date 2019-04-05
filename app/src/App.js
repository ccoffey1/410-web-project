import React, { Component } from 'react';
import Module from './components/Module'
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import moduleOne from './module_descriptions/ModuleDescriptions'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#5ec95c'
    }
  }
});

class App extends Component {
  render() {

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Module moduleOne/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
