function initMap() {
    var element = document.getElementById('map')
    var options = {
        zoom:14,
        center:{ lat:40.637140,  lng: -73.880219}
    };
    var myMap = new google.maps.Map(element, options);
    var marker = new google.maps.Marker({
        position:{ lat:40.637140,  lng: -73.880219 },
        map:myMap,
        icon:'./img/map-mark.png'
    })
  }