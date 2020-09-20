import React, {Component} from 'react';
import {connect} from 'react-redux';

import Transaction from './../Transaction'

import {visibleDate} from './../../state/selectors/VisibleData'

// styling
import './../../styles/Home.css'

class Home extends Component {
  render(){
    return(
      <div className="Homepage">

        {
          this.props.transactions.map((transaction) => {
            return <Transaction key={transaction.id} details={transaction} dispatch={this.props.dispatch} />
          })
        }

      </div>
    );
  }
}

export default connect((state) => {
  return {
    transactions: visibleDate(state.transactions, state.filters)
  }
})(Home);