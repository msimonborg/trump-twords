import React from 'react'
import WordCloud from 'wordcloud'
import $ from 'jquery'


export default class Cloud extends React.Component {
  render() {
    WordCloud(document.getElementById('my-canvas'), { 
      list: this.props.words,
      fontFamily: 'Permanent Marker',
      fontWeight: 100,
      gridSize: Math.round(16 * $('#my-canvas').width() / 10000),
      weightFactor: 10,
      minSize: 1,      
      backgroundColor: 'rgba(224, 239, 237, 0.99)',
    })

    return null
  }
}
