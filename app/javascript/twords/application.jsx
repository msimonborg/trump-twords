import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Cloud from '../twords/cloud'
import DatePickerWrapper from '../twords/date_picker_wrapper'
import moment from 'moment'

class Application extends React.Component {
  constructor() {
    const wordsData = document.getElementById('words_data')
    const data = JSON.parse(wordsData.getAttribute('data'))
    super()
    this.state = {
      apiUrl: data.environment === 'development' ? 'http://localhost:3000/twords' : 'https://trump-twords.herokuapp.com/twords',
      words: data.words,
      cloudVisible: data.cloud_visible,
      date: (data.date ? moment(data.date) : moment()),
    }
  }

  render() {
    const handleChange = (date) => {
      console.log(date['_d'])
      window.location = this.state.apiUrl + '?date=' + date['_d']
    }
    if  (this.state.cloudVisible) {
      return (
        <div>
          {<Cloud words={this.state.words} />}
          <div id="date-picker">{<DatePickerWrapper selected={this.state.date} onChange={handleChange}/>}</div>
        </div>
      )
    } else {
      return (
        <div>
          <div id="start-button">
            <button id="start" onClick={() => this.setState({cloudVisible: true})}>grab me by the pussy</button>
          </div>
          <div id="date-picker"></div>
        </div>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />, document.getElementById('root')
  )
});