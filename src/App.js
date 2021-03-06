import React, { Component } from 'react';
import Navigation from './sections/Nav.js';
import Hero from './sections/Hero.js';
import Testimony from './sections/Testimony.js';
import AboutTeam from './sections/AboutTeam.js';
import AboutGame from './sections/AboutGame.js';
import TeamProcess from './sections/TeamProcess.js';
import Footer from './sections/Footer.js';
import {
  Route,
  BrowserRouter as Router 
} from 'react-router-dom'
import './css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/revolutionary-robotics">
        <div id="body">
          <Navigation />
        	<Route exact path="/" component={Hero}/>
        	<Route path="/about" component={AboutTeam}/>
        	<Route path="/game" component={AboutGame}/>
        	<Route path="/process" component={TeamProcess}/>
        	<Footer />
    		</div>
  		</Router>
    );
  }
}

export default App;
