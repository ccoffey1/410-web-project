import React, { Component } from 'react';
import Module from './components/Module';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile';

class App extends Component {
  render() {

    return (
      <div>
          <Module
            category="Welcome!"
            hints={["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>, <li>Item 2</li>]}
            codeBlock={"public class Testing {\n\n}"}>
          </Module>
      </div>
    );
  }
}

export default App;
