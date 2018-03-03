
// An array containing all of the information needed to create winter host cities
var winterlocations = [
  {coordinates: [46.4908, 9.8355], name: "St.Moritz, Switzerland", year: "1928", gold: "0%"},
  {coordinates: [44.2795, -73.9799], name: "Lake Placid, United States", year: "1932", gold: "+300%"},
  {coordinates: [47.4917, 11.0955], name: "Garmisch-Partenkirchen, Germany", year: "1936", gold: "0%"},
  {coordinates: [46.4908, 9.8355], name: "St.Moritz, Switzerland", year: "1948", gold: "+133%"},
  {coordinates: [59.9139, 10.7522], name: "Oslo, Norway", year: "1952", gold: "+49%"},
  {coordinates: [46.5405, 12.1357], name: "Cortina D'Ampezzo, Italy", year: "1956", gold: "+167%"},
  {coordinates: [39.197, -120.2357], name: "Squaw Valley, United States", year: "1960", gold: "+29%"},
  {coordinates: [47.2692, 11.4041], name: "Innsbruck, Austria", year: "1964", gold: "+69%"},
  {coordinates: [45.1885, 5.7245], name: "Grenoble, France", year: "1968", gold: "+120%"},
  {coordinates: [43.0621, 141.3544], name: "Sapporo, Japan", year: "1972", gold: "+100%"},
  {coordinates: [47.2692, 11.4041], name: "Innsbruck, Austria", year: "1976", gold: "+22%"},
  {coordinates: [44.2795, -73.9799], name: "Lake Placid, United States", year: "1980", gold: "+36%"},
  {coordinates: [43.8563, 18.4131], name: "Sarajevo, Yugoslavia", year: "1984", gold: "+100%"},
  {coordinates: [51.0486, -114.0708], name: "Calgary, Canada", year: "1988", gold: "0%"},
  {coordinates: [45.6755, 6.3927], name: "Albertville, France", year: "1992", gold: "+47%"},
  {coordinates: [61.1153, 10.4662], name: "Lillehammer, Norway", year: "1994", gold: "+28%"},
  {coordinates: [36.6513, 138.181], name: "Nagano, Japan", year: "1998", gold: "+800%"},
  {coordinates: [40.7608, -111.891], name: "Salt Lake City, United States", year: "2002", gold: "+38%"},
  {coordinates: [45.0703, 7.6869], name: "Torino, Italy", year: "2006", gold: "+51%"},
  {coordinates: [43.6028, 39.7341], name: "Sochi, Russia", year: "2014", gold: "+208%"},
  {coordinates: [49.2827, -123.1207] , name: "Vancouver, Canada", year: "2010", gold: "+118%"}
];

// An array containing all of the information needed to create summer host cities
var summerlocations = [
  {coordinates: [-22.9068, -43.1729], name: "Rio De Janeiro, Brazil", year: "2016"},
  {coordinates: [37.98333333, 23.733333], name: "Athens, Greece", year: "1896"},
  {coordinates: [48.86666667, 2.333333], name: "Paris, France", year: "1900"},
  {coordinates: [38.627003, -90.199402], name: "St. Louis, United States", year: "1904"},
  {coordinates: [51.5, -0.083333], name: "London, United Kingdom", year: "1908"},
  {coordinates: [59.33333333, 18.05], name: "Stockholm, Sweden", year: "1912"},
  {coordinates: [51.260197, 4.402771], name: "Antwerp, Belgium", year: "1920"},
  {coordinates: [48.86666667, 2.333333], name: "Paris, France", year: "1924"},
  {coordinates: [52.35, 4.916667], name: "Amsterdam, Netherlands", year: "1928"},
  {coordinates: [34.0522, -118.2437], name: "Los Angeles, United States", year: "1932"},
  {coordinates: [52.51666667, 13.4], name: "Berlin, Germany", year: "1936"},
  {coordinates: [51.5, -0.083333], name: "London, United Kingdom", year: "1948"},
  {coordinates: [60.16666667, 24.933333], name: "Helsinki, Finland", year: "1952"},
  {coordinates: [-37.8136, 144.9631], name: "Melbourne, Australia", year: "1956"},
  {coordinates: [41.9, 12.483333], name: "Rome, Italy", year: "1960"},
  {coordinates: [35.68333333, 139.75], name: "Tokyo, Japan", year: "1964"},
  {coordinates: [19.43333333, -99.133333], name: "Mexico City, Mexico", year: "1968"},
  {coordinates: [48.1351, 11.582], name: "Munich, West Germany", year: "1972"},
  {coordinates: [45.5017, -73.5673], name: "Montreal, Canada", year: "1976"},
  {coordinates: [55.75, 37.6], name: "Moscow, Soviet Union", year: "1980"},
  {coordinates: [34.0522, -118.2437], name: "Los Angeles, United States", year: "1984"},
  {coordinates: [37.55, 126.983333], name: "Seoul, South Korea", year: "1988"},
  {coordinates: [41.3851, 2.1734], name: "Barcelona, Spain", year: "1992"},
  {coordinates: [33.749, -84.388], name: "Atlanta, United States", year: "1996"},
  {coordinates: [-33.8688, 151.2093], name: "Sydney, Australia", year: "2000"},
  {coordinates: [37.98333333, 23.733333], name: "Athens, Greece", year: "2004"},
  {coordinates: [39.91666667, 116.383333], name: "Beijing, China", year: "2008"},
  {coordinates: [51.5, -0.083333], name: "London, United Kingdom", year: "2012"}
];

var northwinterlocation = [
    {coordinates: [61.1153, 10.4662], name: "Lillehammer, Norway", year: "1994", gold: "+28%"}
];

var southwinterlocation = [
    {coordinates: [36.6513, 138.181], name: "Nagano, Japan", year: "1998", gold: "+800%"}
];

// Define arrays to hold created winter and summer markers
var summerMarkers = [];
var winterMarkers = [];

// Loop through locations and create summer markers
for (var i = 0; i < summerlocations.length; i++) {
  summerMarkers.push(
    L.circle(summerlocations[i].coordinates, {
      //stroke: false,
      //fillOpacity: 0.75,
      color: "orange",
      fillColor: "orange",
      radius: 100000
    })
    .bindPopup("<h1>" + summerlocations[i].name + "</h1> <hr> <h3>Year: " + summerlocations[i].year + "</h3>")
  );
}

// Loop through locations and create winter markers
for (var i = 0; i < winterlocations.length; i++) {
  winterMarkers.push(
    L.marker(winterlocations[i].coordinates, {
      //stroke: false,
      //fillOpacity: 0.75,
      color: "orange",
      fillColor: "orange",
    })
    .bindPopup("<h1>" + winterlocations[i].name + "</h1> <hr> <h3>Year: " + winterlocations[i].year + "</h3> <h3>Gold Medal Increase: " + winterlocations[i].gold + "</h3>")
   );
}

var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var northwinterMarkers = [L.marker([61.1153, 10.4662], {icon: redIcon}).bindPopup("<h1> Lillehammer, Norway</h1> <hr> <h3>Year: 1994</h3> <h3>Gold Medal Increase: +28%</h3>")];
var southwinterMarkers = [L.marker([36.6513, 138.181], {icon: redIcon}).bindPopup("<h1> Nagano, Japan</h1> <hr> <h3>Year: 1998</h3> <h3>Gold Medal Increase: +800%</h3>")];

// Define variables for our base layers
var streetmap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ." +
    "T6YbdDixkOBWH_k9GbS8JQ"
);
var darkmap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ." +
    "T6YbdDixkOBWH_k9GbS8JQ"
);

// Create layers
var winter = L.layerGroup(winterMarkers);
var summer = L.layerGroup(summerMarkers);
var north = L.layerGroup(northwinterMarkers);
var south = L.layerGroup(southwinterMarkers);

// Create a baseMaps object
var baseMaps = {
  "Color Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Winter Host Cities": winter,
  "Summer Host Cities": summer,
  "Northern Most Winter Host City": north,
  "Southern Most Winter Host City": south
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, 0],
  zoom: 2,
  layers: [streetmap, winter, summer, north, south]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
