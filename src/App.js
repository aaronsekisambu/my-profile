import React, {Component} from 'react';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import LandingPage from './components/landingPage'
import Profile from './components/profile';
import './App.scss';
import './styles/profile.scss';

class App extends Component {
  render (){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Profile} />
          <Route exact path='/aaron' component={Profile} />
        </Switch>
      </Router>
    )
  }
}

export default App;
