import React from 'react'
import WordCloud from 'wordcloud'
import $ from 'jquery'


export default function Cloud(props) {
  const shapes = ['circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star']

  WordCloud(document.getElementById('my-canvas'), { 
    list: props.words,
    fontFamily: 'Permanent Marker',
    fontWeight: 100,
    gridSize: Math.round(16 * $('#my-canvas').width() / 10000),
    weightFactor: 2.5,
    minSize: 1,      
    backgroundColor: 'rgba(224, 239, 237, 0.99)',
    rotateRatio: .8,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    ellipticity: (Math.random() + 0.5)
  })

  return null
}
