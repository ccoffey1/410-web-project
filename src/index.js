import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { install } from '@material-ui/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
install();

ReactDOM.render(
  <BrowserRouter basename="/cse410/undici/gamification">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();