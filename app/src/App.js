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
          <Module category="Variables" hints={["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>, <li>Item 2</li>]}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
