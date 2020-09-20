import React, {Component} from 'react';
import {connect} from 'react-redux';

import Transaction from './../Transaction'

import {visibleDate} from './../../state/selectors/VisibleData'

import Search from './../Search'

// styling
import './../../styles/Home.css'

class Home extends Component {
  render(){
    return(
      <div>
        <Search />
        <div className="Homepage">

        {
          this.props.transactions.map((transaction) => {
            return <Transaction key={transaction.id} details={transaction} dispatch={this.props.dispatch} />
          })
        }

      </div>
      </div>
      
    );
  }
}

export default connect((state) => {
  return {
    transactions: visibleDate(state.transactions, state.filters)
  }
})(Home);