import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// Pages
import Home from './../components/pages/Home'

// Components
import Navigation from './../components/Navigation'

class AppRouter extends Component {
  render(){
    return(
      <BrowserRouter>
        <Navigation />
        <Switch> 
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;