import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { install } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Module from './components/Module'
import Profile from './components/Module'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { OtherStories } from './components/OtherStories'

install();

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

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/Module1" render={(routeProps) => <Module {...routeProps} title="Basic Java: Variables"
            category="Welcome!"
            description={"Welcome to Undici's Java coding game. These will walk you through Java development step by step. First, you'll start by assigning names to the variables.You can edit code in the text box. Do you see the code in the middle? That's how you declare a variable. String and int are variable types."}
            objectives="Now, let's try to assign a variable name. Let's call the string variable var1 and assign the value of cat to it. Then let's call the int variable var2 and assign the number 3 to it."
            hints={["Consider following examples:", <li>float num = 0.12;</li>, <li>bool dog = true;</li>,<li>Don't forget the semicolon at the end.</li>]}
            codeBlock={["//Master JAVA Variables! \n\npublic static void main(String args[]){\n\n//Create a string variable 'cat'\nstring ",<input type='text' id='bb'placeholder="e.g. var1 = 'cat';"/>,"= 'cat';", "\n\n//Create an int variable\nint ", <input type='text' id='aa'placeholder="e.g. var2 = 3;"/>, "= 3;", "\n}"]}/>} />
          <Route path="/Module2" render={(routeProps) => <Module {...routeProps} title="Basic Java: If statement"
            category="Welcome!"
            description={"WOW! You are getting it so fast. Now, let's dig into conditional statements. The first conditional statement is if statement, you will use if statement a lot on the way to become a professional programmer. Java supports the usual logical conditions, you can use these conditions to perform different actions for different dicisions."}
            objectives="Fill out the text boxes, If a is less than b, then print out 'Hello World'."
            hints={["Consider following hints:", <li>Use if to specify a block of code to be executed, if a specified condition is true.</li>, <li>Make sure your if is in lowercase letter.</li>]}
            codeBlock={["//Master JAVA If statement! \n\npublic static void main(String args[]) {\n\n//Create an if statement \nint a = 3; \nint b = 5;\n\n", <input type='text' id='bb'placeholder="If notation"/>, "(", <input type = 'text' id='if' placeholder='a is less then b'/>,")","{\n\tSystem.out.print('Hello World');\n}", "\n}"]}></Module>}/>
          <Route path="/Profile" component={Profile} />
        </div>
    </Router>,
    </MuiThemeProvider>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

  