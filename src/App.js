import React, {Component} from 'react';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import LandingPage from './components/landingPage'
import './App.scss';

class App extends Component {
  render (){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/aaron' component={LandingPage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
