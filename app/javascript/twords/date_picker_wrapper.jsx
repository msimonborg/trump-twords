import React from 'react';
import DatePicker from 'react-datepicker';
  
// CSS Modules, react-datepicker-cssmodules.css 
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'; 
 
export default class DatePickerWrapper extends React.Component {
  constructor (props) {
    super(props)
  }
 
  render() {
    return <DatePicker
        selected={this.props.selected}
        onChange={this.props.onChange}
    />;
  }
}