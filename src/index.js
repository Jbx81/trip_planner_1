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

let doubletree = buildMarker('hotels', [-74.0124, 40.7039]).addTo(map);
let FSA = buildMarker('restaurants', [-74.009, 40.705]).addTo(map);
let bkBridge = buildMarker('activities', [-73.9969, 40.7061]).addTo(map)

console.log(doubletree);
console.log(FSA);
console.log(bkBridge);
