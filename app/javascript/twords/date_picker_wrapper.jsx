import React from 'react';
import DatePickerInput from './date_picker_input'
import DatePicker from 'react-datepicker';  
 
export default class DatePickerWrapper extends React.Component {
  constructor (props) {
    super(props)
  }
 
  render() {
    return <DatePicker
      customInput={<DatePickerInput />}
      selected={this.props.selected}
      onChange={this.props.onChange}
      withPortal
      fixedHeight
    />;
  }
}