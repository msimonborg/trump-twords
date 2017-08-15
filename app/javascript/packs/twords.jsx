// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import WordCloud from 'wordcloud'
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
  var wordsData = document.getElementById('words_data')
  var words = JSON.parse(wordsData.getAttribute('data'))
  WordCloud(document.getElementById('my-canvas'), { 
    list: words,
    fontFamily: 'Permanent Marker',
    fontWeight: 600,
    gridSize: 1,
    gridSize: Math.round(16 * $('#my-canvas').width() / 2048),
    weightFactor: 5
  } );
});
