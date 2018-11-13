const mapboxgl = require('mapbox-gl')
const buildMarker = require('./marker')

mapboxgl.accessToken =
  'pk.eyJ1IjoibWlrYWk5MzYiLCJhIjoiY2ptaTdqMWpjMDIxbzNvbzFxNDJqNmNneCJ9.KbimXtsztSi9MRMY39mX5w'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available
})

buildMarker('hotels', [-73.009, 40.705]).addTo(map)
