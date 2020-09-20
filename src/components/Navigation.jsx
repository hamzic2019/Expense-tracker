import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import { FaPlus } from "react-icons/fa";

// Importing styles
import './../styles/Navigation.css'

class Navigation extends Component {
  render(){
    return(
      <div className="navigation">
        <h1>Expense Tracker</h1>
        <NavLink to="/" activeClassName="active" className="non-active" exact={true}> Home </NavLink>
        <NavLink to="/categories" activeClassName="active" className="non-active" > Categories </NavLink>
        <NavLink to="/transactions" activeClassName="active" className="non-active" > Transactions </NavLink>
        <NavLink to="/add" activeClassName="active" className="addTransaction" ><FaPlus /> Add Transactions </NavLink>
      </div>
    );
  }
}


export default Navigation;