//Nakota Isga
const map = L.map('map').setView([53.555367, -113.631115], 12);
// North Glenora
// const map = L.map('map').setView([53.555, -113.56], 15);

mapLink ='<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/simmer999/ckt1w9ax81ij217lv8sylq8ga/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2ltbWVyOTk5IiwiYSI6ImNrbHJnYnFhbzE4NGYyb2xiNTlibG45NXoifQ.7TwAn3-V9EmrnlPv72tGWA', {
attribution: '&copy; ' + mapLink + ' Contributors',
maxZoom: 18,
}).addTo(map);






var svg = d3.select(map.getPanes().overlayPane).append("svg")
var g = svg.append("g").attr("class", "leaflet-zoom-hide")



var marker = L.circle([53.5554, -113.5518])
    .addTo(map)
    .bindPopup("<b>North Glenora</b><br>Near Mike's place.")
    // .openPopup();
    var marker2 = L.circle([53.555, -113.55])
        .addTo(map)


for (var i = 0; i < markers2.length; i++) {
    barker = new L.circle([markers2[i][2], markers2[i][1]])
      .bindPopup(markers2[i][0])
        .addTo(map);
    }

  






