import React, { Component } from 'react';
import Module from './components/Module'
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import moduleOne from './module_descriptions/ModuleDescriptions'
import { StartPage } from './components/StartPage';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#5ec95c'
    },
    helpcolor: {
      main: '#f4d142'
    }
  }
});

class App extends Component {

  render() {

    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <StartPage></StartPage>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
