function initMap() {
  const vols = { lat: 35.9606, lng: 83.9207 }; 
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: vols,
  });
}

google.maps.event.addDomListener(window, 'load', initMap);