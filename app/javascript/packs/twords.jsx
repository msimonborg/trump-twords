/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Application from '../twords/application'
import moment from 'moment'

document.addEventListener('DOMContentLoaded', () => {
  const dataTag = document.getElementById('data_tag')
  const data = JSON.parse(dataTag.getAttribute('data'))
  const apiUrl = (data.environment === 'development' ? 'http://localhost:3000/twords/' : 'http://www.trumpwords.exposed/twords/')
  const date = (data.date ? moment(data.date) : moment())
  const words = data.words
  const greeting = data.greeting
  const cloudVisible = false

  ReactDOM.render(
    <Application apiUrl={apiUrl} words={words} cloudVisible={cloudVisible} date={date} greeting={greeting} />,
    document.getElementById('root')
  )
});