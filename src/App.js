import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom';
import LoginPage from './containers/login';
import LandingPage from './containers/landing';
import './App.css';

const App = props => {

    return (
<Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={LoginPage} />
         
        </Switch>
      </div>
    </Router>
    )
}
export default App;
