import React from 'react'

export default function Greeting(props) {
  return (
    <button id="start" onClick={props.onClick}>
      {props.greeting}
    </button>
  )
}