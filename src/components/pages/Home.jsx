import React, {Component} from 'react';
import {connect} from 'react-redux';

import Transaction from './../Transaction'

class Home extends Component {
  render(){
    return(
      <div>

        {
          this.props.transactions.map((transaction) => {
            return <Transaction key={transaction.id} details={transaction} />
          })
        }

      </div>
    );
  }
}

export default connect((state) => {
  return {
    transactions: state.transactions
  }
})(Home);