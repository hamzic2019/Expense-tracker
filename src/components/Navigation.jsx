import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  render(){
    return(
      <div>
        <h1>Expense Tracker</h1>
        <NavLink to="/" activeClassName="active" exact={true}> Home </NavLink>
        <NavLink to="/categories" activeClassName="active" exact={true}> Categories </NavLink>
        <NavLink to="/transactions" activeClassName="active" exact={true}> Transactions </NavLink>
        <hr />
      </div>
    );
  }
}


export default Navigation;