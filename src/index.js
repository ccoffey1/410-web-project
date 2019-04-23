import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { install } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Module from './components/Module'
import Profile from './components/Module'

install();
ReactDOM.render(
    <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/Module1" render={(routeProps) => <Module {...routeProps} category="Variables"/>} />
          <Route path="/Profile" component={Profile} />
        </div>
    </Router>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

  