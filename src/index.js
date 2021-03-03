import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routine from './Routine';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home';

ReactDOM.render(
  // <Router><Routine/></Router>
  <Router><Home/></Router>
  ,
  document.getElementById('root')
);

