// const support_colours = function(d) {
//     if(parseInt(d.supportLevel) === 0) {    // no_rating_given
//       return "blue";   
//   } if(parseInt(d.supportLevel) === 1) {    // bright green
//       return "#00ff00";
//   } if(parseInt(d.supportLevel) === 2) {    // yellow
//       return "#ffbf00";
//   } if(parseInt(d.supportLevel) === 3) {    //grey
//       return "#555555";  
//   } if(parseInt(d.supportLevel) === 4) {    //purple
//       return "#ff00ff";
//   } if(parseInt(d.supportLevel) === 5) {    //red
//       return "red";         
//   } else {                                  // not_talked_to
//       return "black"   
//   }
// }





// let myCircles = d3.select("#map")
//     .select("svg")
//     .selectAll("myCircles")
//     .data(markers1)                    // 'markers' is the const in sup_addresses.js
//     .enter()   
//     .append("circle")
//     //  transition

//         // .transition()
//         // .delay((d, i) => i * 25)
//         // .duration(100)

//     .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
//     .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
//     .attr("r", 3)
//     .style("fill", support_colours)
//     .style('stroke', support_colours) 
    
    
// // myCircles.call(zoom.transform, d3.zoomIdentity);



    
// // Function that updates circle position if something changes
// function update() {
//     d3.selectAll("circle")
//         .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
//         .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
// }


// // If the user changes the map (zoom or drag), update circle position:
// map.on("moveend", update)