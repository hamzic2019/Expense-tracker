import React, {Component, useState} from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {setSearchTerm, setStartDate, setEndDate} from './../state/actions/filters'
import {connect} from 'react-redux';
import moment from 'moment';

//import { FaPlus } from "react-icons/fa";

// Importing styles
import './../styles/Search.css'

class Search extends Component {
  state = {
    startDate: null,
    endDate: null
    
  }

  handleChange = (e) => {
    this.props.dispatch(setSearchTerm({searchTerm: e.target.value}))
    console.log(this.state.startDate);
    console.log(this.state.endDate)
  }
  handleDateChange = (e) => {
    console.log('IHHIHI DATES');
  }

  render(){
   
    return(
      <div className="Search">
    
          <input 
            type="text" 
            placeholder="Search..." 
            className="searchTerm"
            onChange={this.handleChange}
          />
          
          <div className="datesRange">
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>  {
                  this.setState({ startDate, endDate })

                  if(endDate !== null) {
                    this.props.dispatch(setEndDate({endDate: moment(endDate).valueOf()}))
                  }

                  if (startDate !== null) {
                      this.props.dispatch(setStartDate({startDate: moment(startDate).valueOf()}))
                  }
                }} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                isOutsideRange={() => false}
             />
          </div>

       </div>
    );
  }
}




export default connect()(Search);