import React, {Component} from 'react';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import LandingPage from './components/landingPage'
import './App.scss';

class App extends Component {
  render (){
    return (
      <Router>
        <Switch>
          <LandingPage />
        </Switch>
      </Router>
    )
  }
}

export default App;
