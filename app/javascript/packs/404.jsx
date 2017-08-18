import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Cloud from '../twords/cloud'
import DatePickerWrapper from '../twords/date_picker_wrapper'
import moment from 'moment'

class FourOhFour extends React.Component {
  constructor() {
    super()
    const env = JSON.parse(document.getElementById('env').getAttribute('data')).env
    this.state = {
      apiUrl: env === 'development' ? 'http://localhost:3000/twords/' : 'http://www.trumpwords.exposed/twords/',      
      words: buildWords(),
      date: moment(),
    }
  }

  render() {
    const handleChange = (date) => {
      console.log(date['_d'])
      var url = this.state.apiUrl + date['_d'] + '.json'
      var request = new XMLHttpRequest()
      request.open("GET", url)
      request.addEventListener("load", () => {
        var response = JSON.parse(request.response)
        console.log(response)
        this.setState({ words: response.words, date: moment(response.date) })
      });
      request.send()
    }

    return (
      <div>
        {<Cloud words={this.state.words} />}
        <div id="date-picker">{<DatePickerWrapper selected={this.state.date} onChange={handleChange}/>}</div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <FourOhFour />, document.getElementById('root')
  )
});

function buildWords() {
  var choices = ['404', 'sorry', 'not found', 'whoops!', 'try again']
  var words = []
  words.push(['404', 30])
  
  for (let i = 20; i >= 0; i--) {
    for (let n = 0; n < 10; n++) {
      words.push([choices[Math.floor(Math.random() * choices.length)], (i - n)])
    }
  }

  for (let i = 0; i < 200; i++) {
    words.push([choices[Math.floor(Math.random() * choices.length)], 3])
  }
  
  for (let i = 0; i < 400; i++) {
    words.push([choices[Math.floor(Math.random() * choices.length)], 2])
  }

  for (let i = 0; i < 800; i++) {
    words.push([choices[Math.floor(Math.random() * choices.length)], 1])
  }

  return words
}
