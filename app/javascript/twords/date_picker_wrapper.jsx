import React from 'react';
import DatePickerInput from './date_picker_input'
import DatePicker from 'react-datepicker';  
 
export default function DatePickerWrapper(props) {
  return (
    <div id="date-picker">      
      <DatePicker
        customInput={<DatePickerInput />}
        selected={props.selected}
        onChange={props.onChange}
        fixedHeight
      />
    </div>
  )
}