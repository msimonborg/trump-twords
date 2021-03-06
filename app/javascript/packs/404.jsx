import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Application from '../twords/application'
import moment from 'moment'

document.addEventListener('DOMContentLoaded', () => {
  const dataTag = document.getElementById('data_tag')
  const data = JSON.parse(dataTag.getAttribute('data'))
  const apiUrl = (data.environment === 'development' ? 'http://localhost:3000/twords/' : 'http://www.trumpwords.exposed/twords/')
  const words = notFoundWords()
  const cloudVisible = true
  const date = moment()
  const minDate = (data.oldest_date ? moment(data.oldest_date) : moment())

  ReactDOM.render(
    <Application
      apiUrl={apiUrl}
      words={words}
      cloudVisible={cloudVisible}
      date={date}
      minDate={minDate} />,
    document.getElementById('root')
  )
})

function notFoundWords() {
  const messages = ['404', 'sorry', 'not found', 'whoops!', 'try again', 'better luck next time', 'do over!']
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)]  
  const words = []

  words.push(['404', 30])
  
  for (let i = 20; i >= 0; i--) {
    for (let n = 0; n < 10; n++) {
      words.push([randomMessage(), (i - n)])
    }
  }

  for (let i = 0; i < 200; i++) {
    words.push([randomMessage(), 3])
  }
  
  for (let i = 0; i < 400; i++) {
    words.push([randomMessage(), 2])
  }

  for (let i = 0; i < 800; i++) {
    words.push([randomMessage(), 1])
  }

  return words
}