const mapboxgl = require('mapbox-gl')

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
}

function marker(activity, coords) {
  let addMarker = new mapboxgl.Marker(activity, coords);
  addMarker.style.width = '32px';
  addMarker.style.width = '32px'
  addMarker.style.height = '39px'
  addMarker.backgroundImage = `url(http://i.imgur.com/D9574Cu.png)`
  return addMarker;
}


module.exports = marker;
