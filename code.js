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

const support_colours = function(d) {
    if(parseInt(d.supportLevel) === 0) {    // no_rating_given
      return "blue";   
  } if(parseInt(d.supportLevel) === 1) {    // bright green
      return "#00ff00";
  } if(parseInt(d.supportLevel) === 2) {    // yellow
      return "#ffbf00";
  } if(parseInt(d.supportLevel) === 3) {    //grey
      return "#555555";  
  } if(parseInt(d.supportLevel) === 4) {    //purple
      return "#ff00ff";
  } if(parseInt(d.supportLevel) === 5) {    //red
      return "red";         
  } else {                                  // not_talked_to
      return "black"   
  }
}

// let myCircles = d3.select("#map")
//     .select("svg")
//     .selectAll("myCircles")
//     .data(markers1)                    // 'markers' is the const in sup_addresses.js
//     .enter()   
//     .append("circle")
//     //  transition

        // .transition()
        // .delay((d, i) => i * 25)
        // .duration(100)

    // .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
    // .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
    // .attr("r", 3)
    // .style("fill", support_colours)
    // .style('stroke', support_colours) 

// let yourCircles = d3.select('#map')
//     .select('svg')
//     .selectAll('yourCircles')
//     .data(markers2)
//     .enter()
//     .delay(d)
//     .duration(2000)
//     .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
//     .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
//     .attr("r", 3)
//     .style("fill", '#3388ff')
    
// Function that updates circle position if something changes
// function update() {
//     d3.selectAll("circle")
//         .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
//         .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
// }

// If the user changes the map (zoom or drag), update circle position:
// map.on("moveend", update)



for (var i = 0; i < markers2.length; i++) {
    barker = new L.circle([markers2[i][2], markers2[i][1]])
      .bindPopup(markers2[i][0])
        .addTo(map);
    }






