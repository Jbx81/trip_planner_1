const mapboxgl = require('mapbox-gl')

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
}

function buildMarker(type, coords) {
  const marker = document.createElement('div')
  marker.style.width = '32px'
  marker.style.height = '39px'
  marker.backgroundImage = `url(${iconURLs.hotels})`

  return new mapboxgl.Marker(type).setLngLat(coords).addTo(map)
}

module.exports = buildMarker
