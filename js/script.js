mapboxgl.accessToken = 'pk.eyJ1Ijoiaml5b29ubSIsImEiOiJja2h0dWQ1eHgwdTVuMzRvNWF1YmtyZ3ZoIn0._wCfAXbQt1pdKwXNynE6uw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-73.97829, 40.72509],
    zoom: 18.58,
    pitch: 45.00,
    bearing: -40.00
});
map.scrollZoom.disable();

var marker = new mapboxgl.Marker()
    .setLngLat([-73.97799, 40.72532])
    .addTo(map);
var marker1 = new mapboxgl.Marker()
    .setLngLat([-73.97769, 40.72521])
    .addTo(map);
var marker2 = new mapboxgl.Marker()
    .setLngLat([-73.97831, 40.72523])
    .addTo(map);
var marker3 = new mapboxgl.Marker()
    .setLngLat([-73.978961, 40.7251403])
    .addTo(map);
var marker4 = new mapboxgl.Marker()
    .setLngLat([-73.9797418, 40.7254587])
    .addTo(map);