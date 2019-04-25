import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { install } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Module from './components/Module'
import { createMuiTheme, MuiThemeProvider, Input } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { StartPage } from './components/StartPage'
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

var name = "" // Our Player's Name!

const onBegin = (playerName) => {
  name = playerName;
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
        <div>
          <Route exact path="/" render={() => <StartPage onBegin={onBegin}/>} />
          <Route path="/Module1" render={(routeProps) => <Module {...routeProps} 
            title="Basic Java: Variables"
            category={"Welcome, " + name + "!"}
            description={"First, we're going to learn about variables. Variables in code, like in math, can take on any value that you assign to them. However, unlike variables in math, Java variables need to be assigned a type. The type of the variable determines the value it can hold. So, for example, the type 'String' can hold text data, and the type 'int' can hold integer values. There are more types in Java, but we'll start by looking at an example of type String."}
            objectives={"Now, let's try to assign a value to a variable. In the code on the next panel there is a variable called 'ballColor.' Change its value to 'orange.' Click 'Run' to see your code in action."}
            hints={["Consider following examples:", <li>Variables with type "String" should be wrapped in quotes!</li>]}
            codeBlock={["//Master JAVA Variables! \n\npublic static void main(String args[]) {\n\n  //Create a string variable\n\n  String ballColor = ",<Input style={{width: '4.4em', fontSize: '1.1em', color: 'brown'}} type='text' id='bb' placeholder='color'/>,";\n\n}"]}/>} />
          <Route path="/Module2" render={(routeProps) => <Module {...routeProps} title="Basic Java: If statement"
            category="Welcome!"
            description={"WOW! You are getting it so fast. Now, let's dig into conditional statements. The first conditional statement is if statement, you will use if statement a lot on the way to become a professional programmer. Java supports the usual logical conditions, you can use these conditions to perform different actions for different dicisions."}
            objectives="Fill out the text boxes, If a is less than b, then print out 'Hello World'."
            hints={["Consider following hints:", <li>Use if to specify a block of code to be executed, if a specified condition is true.</li>, <li>Make sure your if is in lowercase letter.</li>]}
            codeBlock={["//Master JAVA If statement! \n\npublic static void main(String args[]) {\n\n//Create an if statement \nint a = 3; \nint b = 5;\n\n", <input type='text' id='bb'placeholder="If notation"/>, "(", <input type = 'text' id='if' placeholder='a is less then b'/>,")","{\n\tSystem.out.print('Hello World');\n}", "\n}"]}></Module>}/>
          <Route path="/Module3" render={(routeProps) => <Module {...routeProps} 
            title="Basic Java: If else statement"
            category="Welcome!"
            description={"Now, the second conditional statement is if else statement, if else statement is based on if statement which means if the specified condition is not true, then the program will perform different action."}
            objectives="Fill out the text boxes, If a is less than b, then print out 'Hello World', otherwise print out 'Hello UB'."
            hints={["Consider following hints:", <li>Use else to specify a block of code to be executed, if the same condition is false</li>, <li>Make sure your else is in lowercase letter.</li>]}
            codeBlock={["//Master JAVA If else statement! \n\npublic static void main(String args[]) {\n\n//Create an if else statement \nint a = 6; \nint b = 5;\n\nif (a < b){\n\tSystem.out.print('Hello World');\n}",<input type = 'text' id='ee' placeholder='else notation'/>,"{\n\t Systeme.out.print('Hello UB');", "\n}"]}></Module>}/>
          <Route path="/Module4" render={(routeProps) => <Module {...routeProps} 
            title="Basic Java: While loop"
            category="Welcome!"
            description={"Now, let's take a look at more advanced conditional statement --- while loop. The while statement evaluates expression, which must return a boolean value. If the expression evaluates to true, the while statement executes the statement(s) in the while block. The while statement continues testing the expression and executing its block until the expression evaluates to false."}
            objectives="Fill out the text boxes, while a is less than b, print out 'Hello World', then increase a by 1 everytime until a is larger than b. "
            hints={["Consider following hints:", <li>Use while to specify a block of code to be executed, if a specified condition is true.</li>, <li>Do not forget to increase the variable used in the condition, otherwise the loop will never end!</li>]}
            codeBlock={["//Master JAVA  While loop! \n\npublic static void main(String args[]) {\n\n//Create a while loop \nint a = 0; \nint b = 5;\n\n", <input type='text' id='bb'placeholder="while notation"/>, "(", <input type = 'text' id='if' placeholder='a is less then b'/>,")","{\n\tSystem.out.print('Hello World');\n\t", <input type='text' id='ww' placeholder='increase a by 1'/>,"\n}","\n}"]}></Module>}/>
          <Route path="/Module5" render={(routeProps) => <Module {...routeProps} 
            title="Basic Java: For loop"
            category="Welcome!"
            description={"Now, let's take a look at another advanced conditional statement --- For loop. The for statement provides a compact way to iterate over a range of values. Programmers often refer to it as the ‘for loop’ because of the way in which it repeatedly loops until a particular condition is satisfied."}
            objectives="Fill out the text boxes, for a is 0, a is less than b, and increase a by 1 everytime until a is larger than b. When a is less than b, program will print 'Hello World', after you finish the code, think about how many times will the program print out 'Hello World'."
            hints={["Consider following hints:", <li>The initialization expression initializes the loop; it's executed once, as the loop begins.</li>, <li>When the termination expression evaluates to false, the loop terminates.</li>, <li>The increment expression is invoked after each iteration through the loop; it is perfectly acceptable for this expression to increment or decrement a value.</li>]}
            codeBlock={["//Master JAVA  For loop! \n\npublic static void main(String args[]) {\n\n//Create a for loop \nint b = 5;\n\n", <input type='text' id='bb'placeholder="for notation"/>, "(", <input type = 'text' id='if' placeholder='initialize a, set it to 0, a is less then b, increase a by 1'/>,")","{\n\tSystem.out.print('Hello World');\n}","\n}"]}></Module>}/>
        </div>
    </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

  