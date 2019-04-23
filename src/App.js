import React, { Component } from 'react';
import Module from './components/Module'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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
          <Module 
            category="Welcome!"
            hints={["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>, <li>Item 2</li>]}
            codeBlock={["//Mater JAVA Variables! \n\npublic class Testing {\n\n//Create a string variable 'cat'\nstring ",<input type='text' id='bb'placeholder="e.g. var1 = 'cat';"/>, "\n\n//Create an int variable\nint ", <input type='text' id='aa'placeholder="e.g. var2 = 3;"/>, "\n\n//Now output whatever you want!\n",<input type='text' id='cc'placeholder="e.g. System.out.println('Your sentence')"/>, "\n\n}" ]}>            
          </Module>
          <Module 
            category="Welcome!"
            hints={["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>, <li>Item 2</li>]}
            codeBlock={["//Mater JAVA if...else! \n\npublic class Testing {\n\n//Create a string variable 'cat'\nstring ",<input type='text' id='bb'placeholder="e.g. var1 = 'cat';"/>, "\n\n//Create an int variable\nint ", <input type='text' id='aa'placeholder="e.g. var2 = 3;"/>,"\n\n//Create condition statement\n//using if(){}else{}", "\n\nif(", <input type='text' id='cc'placeholder="var1==1"/>,"){","\n//output\n",<input type='text' id='cc'placeholder="System.out.println();"/>,"\n}else{\n//output\n",<input type='text' id='cc'placeholder="System.out.println();"/>,"\n}","\n\n}"]}>            
          </Module>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
