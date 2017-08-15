import WordCloud from 'wordcloud'
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
  const wordsData = document.getElementById('words_data')
  const words = JSON.parse(wordsData.getAttribute('data'))
  WordCloud(document.getElementById('my-canvas'), { 
    list: words,
    fontFamily: 'Permanent Marker',
    fontWeight: 600,
    gridSize: 1,
    gridSize: Math.round(16 * $('#my-canvas').width() / 10000),
    weightFactor: 5
  } );
});
