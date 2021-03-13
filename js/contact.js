let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 6.5244, lng: 3.3792 },
    zoom: 8,
  });
  const image =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
const beachMarker = new google.maps.Marker({
  position: { lat: 6.5244, lng: 3.792 },
  map,
  icon: map,
});
}

