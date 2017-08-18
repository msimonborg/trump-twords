import React from 'react'
import { Button } from 'react-bootstrap';

export default class DatePickerInput extends React.Component {
  
  render () {
    return (
      <Button
        bsStyle='primary'
        id="datepicker-input"
        onClick={this.props.onClick}>
        {this.props.value}
      </Button>
    )
  }
}
