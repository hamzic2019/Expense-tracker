import React, {Component} from 'react';
import './../styles/Transaction.css'
import { FaMugHot } from "react-icons/fa";
import moment from 'moment';

class Transaction extends Component {
  render(){
    return(
      <div className="card">
        <div className="icon-card">
          <FaMugHot className="icon" />
        </div>

        <div className="description-card">
          <h2 className="card-title">{this.props.details.title}</h2>
          <p className="card-createdAt">{moment(this.props.details.createdAt).format('DD MMM YYYY')} - <span>Remove</span></p>
        </div>

        <div className="price-card">
          <p>${this.props.details.amount}</p>
        </div>
      </div>
    );
  }
}

export default Transaction;