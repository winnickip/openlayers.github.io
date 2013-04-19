var map = new ol.Map({
  layers: [
    new ol.layer.TileLayer({
      source: new ol.source.OSM()
    })
  ],
  renderers: ol.RendererHints.createFromQueryData(),
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});

var geolocation = new ol.Geolocation();
geolocation.bindTo('projection', map.getView());

var marker = new ol.Overlay({
  map: map,
  element: /** @type {Element} */ ($('<i/>').addClass('icon-flag').get(0))
});
// bind the marker position to the device location.
marker.bindTo('position', geolocation);

geolocation.addEventListener('accuracy_changed', function() {
  $(marker.getElement()).tooltip({
    title: this.getAccuracy() + 'm from this point'
  });
});

$('#locate').click(function() {
  geolocation.setTracking(true);
});
