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
      apiUrl: data.environment === 'development' ? 'http://localhost:3000/twords/' : 'http://www.trumpwords.exposed/twords/',
      words: data.words,
      cloudVisible: false,
      date: (data.date ? moment(data.date) : moment()),
      greeting: data.greeting,
    }
  }

  handleDateChange(date) {
    date = date['_d']
    console.log(date)
    let url = this.state.apiUrl + date + '.json'
    let request = new XMLHttpRequest()
    request.open("GET", url)
    request.addEventListener("load", () => {
      let response = JSON.parse(request.response)
      console.log(response)
      this.setState({ words: response.words, date: moment(response.date) })
    });
    request.send()
  }

  render() {
    if  (this.state.cloudVisible) {
      return (
        <div>
          {<Cloud words={this.state.words} />}
          <div id="date-picker">
            {<DatePickerWrapper selected={this.state.date} onChange={this.handleDateChange.bind(this)}/>}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <button id="start" onClick={() => this.setState({cloudVisible: true})}>{this.state.greeting}</button>
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
