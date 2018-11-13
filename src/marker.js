const mapboxgl = require('mapbox-gl')

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
}

function marker(type, coords) {
  let newMarker = document.createElement('div')
  newMarker.style.width = '32px'
  newMarker.style.height = '39px'
  newMarker.style.backgroundImage = `url(${iconURLs[type]})`

  return new mapboxgl.Marker(newMarker).setLngLat(coords)
}

module.exports = marker
