import React, {Component} from 'react';
import {connect} from 'react-redux';
import {visibleDate} from './../../state/selectors/VisibleData'

import './../../styles/AddTransaction.css'

import {addTransaction} from './../../state/actions/transactions'

import moment from 'moment';

class AddTransaction extends Component {
  state = {
    amount: '',
    title: '',
    note: '',
    createdAt: ''
  }
  handleClick = (e) => {
    console.log(this.state);
    if(this.state.amount.length > 0 && this.state.title.length >0 ){
      this.props.dispatch(addTransaction({...this.state}))
      this.props.history.push('/')
    }
  }
  render(){
    return(
      <div className="AddTransaction">
        <h1>HERE YOU CAN ADD TRANSACTION</h1>
        <input 
          type="text" 
          id="amount" 
          placeholder="e.g. $ 25.55"
          value={this.state.amount}
          onChange={(e) => {
            this.setState({amount: e.target.value })
          }}
        />

        <input 
          type="text" 
          id="title" 
          placeholder="e.g. Home Mortage"
          value={this.state.title}
          onChange={(e) => {
            this.setState({title: e.target.value })
          }}
        />

        <input 
            type="text" 
            id="note" 
            placeholder="e.g. Rent for Fabruary before moving out"
            value={this.state.note}
            onChange={(e) => {
              this.setState({note: e.target.value })
            }}
          />

        <input 
          type="date"
          id="date"
          onChange={(e) => {
            const n = new Date(e.target.value).getTime()
            this.setState({createdAt: n})
          }}
        />
        
        <button onClick={this.handleClick} > CLICK ME </button>
      </div>
      
    );
  }
}

export default connect((state) => {
  return {
    transactions: visibleDate(state.transactions, state.filters)
  }
})(AddTransaction);