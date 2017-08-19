import React from 'react'
import { Button } from 'react-bootstrap';

export default function DatePickerInput(props) {
  return (
    <Button
      bsStyle='primary'
      id="datepicker-input"
      onClick={props.onClick}>
      {props.value}
    </Button>
  )
}
