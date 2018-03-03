// Create a map object
var myMap = L.map("map", {
  center: [37.09, 0],
  zoom: 2
});


// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mraigosa/cje1m3khj0ex72so7bju99x0z/tiles/256/{z}/{x}/{y}?" +
"access_token=pk.eyJ1IjoibXJhaWdvc2EiLCJhIjoiY2plMWw0YjVyNmRmZjJ4cDBmcWMzdmVpZSJ9.YkLtlmRv2I7ziqzFHAykZw"
//L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
//  "access_token=pk.eyJ1IjoibXJhaWdvc2EiLCJhIjoiY2plMWw0YjVyNmRmZjJ4cDBmcWMzdmVpZSJ9.YkLtlmRv2I7ziqzFHAykZw" +
//  "T6YbdDixkOBWH_k9GbS8JQ"
).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [45.9237, 6.8694],
  name: "Chamonix, France",
  year: "1924",
  gold: "N/A"
},
{
  location: [46.4908, 9.8355],
  name: "St. Mortiz, Switzerland",
  year: "1928",
  gold: "+0%"
},
{
  location: [44.2795, -73.9799],
  name: "Lake Placid, USA",
  year: "1932",
  gold: "+300%"
},
{
  location: [47.4917, 11.0955],
  name: "Garmisch-Partenkirchen, Germany",
  year: "1936",
  gold: "+0%"
},
{
  location: [46.4908, 9.8355],
  name: "St. Moritz, Switzerland",
  year: "1948",
  gold: "+133%"
},
{
  location: [59.9139, 10.7522],
  name: "Oslo, Norway",
  year: "1952",
  gold: "+49%"
},
{
  location: [46.5405, 12.1357],
  name: "Cortina D Ampezzo",
  year: "1956",
  gold: "+167%"
},
{
  location: [39.197, -120.2357],
  name: "Squaw Valley, USA",
  year: "1960",
  gold: "+29%"
},
{
  location: [47.2692, 11.4041],
  name: "Innsbruck, Austria",
  year: "1964",
  gold: "+70%"
},
{
  location: [45.1885, 5.7245],
  name: "Grenoble, France",
  year: "1968",
  gold: "+120%"
},
{
  location: [43.0621, 141.3544],
  name: "Sapporo, Japan",
  year: "1972",
  gold: "+100%"
}, 
{
  location: [47.2692, 11.4041],
  name: "Innsbruck, Austria",
  year: "1976",
  gold: "+22%"
},
{
  location: [44.2795, -73.9799],
  name: "Lake Placid, USA",
  year: "1980",
  gold: "+36%"
},
{
  location: [43.8563, 18.4131],
  name: "Sarejevo, Yugoslavia",
  year: "1984",
  gold: "+100%"
},
{
  location: [51.0486, -114.0708],
  name: "Calgary, Canada",
  year: "1988",
  gold: "+0%"
},
{
  location: [45.6755, 6.3927],
  name: "Albertville, France",
  year: "1992",
  gold: "+44%"
},
{
  location: [61.1153, 10.4662],
  name: "Lilehammer, Norway",
  year: "1994",
  gold: "+28%"
},
{
  location: [36.077961, 138.065536],
  name: "Nagano, Japan",
  year: "1998",
  gold: "+800%"
},
{
  location: [40.760779, -111.891047],
  name: "Salt Lake City, USA",
  year: "2002",
  gold: "+38%"
},
{
  location: [45.0703, 7.6869],
  name: "Torino, Italy",
  year: "2006",
  gold: "+51%"
},
{
  location: [49.2827, -123.1207],
  name: "Vancouver, Canada",
  year: "2010",
  gold: "+118%"
},
{
  location: [43.6028, 39.7341],
  name: "Sochi, Russia",
  year: "2014",
  gold: "+208%"
}
];


// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
//    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Year: " + city.year + "</h3>")
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Year: " + city.year + "</h3> <h3>Gold Medal Increase: " + city.gold + "</h3>")
    .addTo(myMap);
}
