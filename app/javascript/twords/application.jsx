import React from 'react'
import Cloud from './cloud'
import DatePickerWrapper from './date_picker_wrapper'
import Greeting from './greeting'
import moment from 'moment'

export default class Application extends React.Component {
  constructor(props) {
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
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
    })
    request.send()
  }

  render() {
    if  (this.state.cloudVisible) {
      return (
        <div>
          <Cloud words={this.state.words} />
          <DatePickerWrapper selected={this.state.date} onChange={this.handleDateChange} maxDate={moment()}/>
        </div>
      )
    } else {
      return (
        <div>
          <Greeting onClick={() => this.setState({cloudVisible: true})} greeting={this.state.greeting} />
        </div>
      )
    }
  }
}

