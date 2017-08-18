import React from 'react'
import Cloud from '../twords/cloud'
import DatePickerWrapper from '../twords/date_picker_wrapper'
import moment from 'moment'

export default class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: props.apiUrl,
      words: props.words,
      cloudVisible: props.cloudVisible,
      date: props.date,
      greeting: props.greeting,
    }
  }

  handleDateChange(date) {
    date = date['_d']
    const url = this.state.apiUrl + date + '.json'
    const request = new XMLHttpRequest()
    console.log(date)    
    request.open("GET", url)
    request.addEventListener("load", () => {
      const response = JSON.parse(request.response)
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

