import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Page';
import LandingPageFooter from './components/Footer';

const App = () => {
    return (
        <HashRouter>
          <Switch>
              <Route exact path="/">
              <div className="landing-body-container">
                <div className="app-shell">
                    <LandingPage />
                    <LandingPageFooter />
                </div>
              </div>
              </Route>
          </Switch>
        </HashRouter>
    );
};

export default App;