// An array containing all of the information needed to create winter host cities
var winterlocations = [
    { coordinates: [46.4908, 9.8355], name: "St.Moritz, Switzerland", year: "1928", gold: "0%" },
    { coordinates: [44.2795, -73.9799], name: "Lake Placid, United States", year: "1932", gold: "+300%" },
    { coordinates: [47.4917, 11.0955], name: "Garmisch-Partenkirchen, Germany", year: "1936", gold: "0%" },
    { coordinates: [46.4908, 9.8355], name: "St.Moritz, Switzerland", year: "1948", gold: "+133%" },
    { coordinates: [59.9139, 10.7522], name: "Oslo, Norway", year: "1952", gold: "+49%" },
    { coordinates: [46.5405, 12.1357], name: "Cortina D'Ampezzo, Italy", year: "1956", gold: "+167%" },
    { coordinates: [39.197, -120.2357], name: "Squaw Valley, United States", year: "1960", gold: "+29%" },
    { coordinates: [47.2692, 11.4041], name: "Innsbruck, Austria", year: "1964", gold: "+69%" },
    { coordinates: [45.1885, 5.7245], name: "Grenoble, France", year: "1968", gold: "+120%" },
    { coordinates: [43.0621, 141.3544], name: "Sapporo, Japan", year: "1972", gold: "+100%" },
    { coordinates: [47.2692, 11.4041], name: "Innsbruck, Austria", year: "1976", gold: "+22%" },
    { coordinates: [44.2795, -73.9799], name: "Lake Placid, United States", year: "1980", gold: "+36%" },
    { coordinates: [43.8563, 18.4131], name: "Sarajevo, Yugoslavia", year: "1984", gold: "+100%" },
    { coordinates: [51.0486, -114.0708], name: "Calgary, Canada", year: "1988", gold: "0%" },
    { coordinates: [45.6755, 6.3927], name: "Albertville, France", year: "1992", gold: "+47%" },
    { coordinates: [61.1153, 10.4662], name: "Lillehammer, Norway", year: "1994", gold: "+28%" },
    { coordinates: [36.6513, 138.181], name: "Nagano, Japan", year: "1998", gold: "+800%" },
    { coordinates: [40.7608, -111.891], name: "Salt Lake City, United States", year: "2002", gold: "+38%" },
    { coordinates: [45.0703, 7.6869], name: "Torino, Italy", year: "2006", gold: "+51%" },
    { coordinates: [43.6028, 39.7341], name: "Sochi, Russia", year: "2014", gold: "+208%" },
    { coordinates: [49.2827, -123.1207], name: "Vancouver, Canada", year: "2010", gold: "+118%" }
];

// An array containing all of the information needed to create summer host cities
var summerlocations = [
    { coordinates: [-22.9068, -43.1729], name: "Rio De Janeiro, Brazil", year: "2016" },
    { coordinates: [37.98333333, 23.733333], name: "Athens, Greece", year: "1896" },
    { coordinates: [48.86666667, 2.333333], name: "Paris, France", year: "1900" },
    { coordinates: [38.627003, -90.199402], name: "St. Louis, United States", year: "1904" },
    { coordinates: [51.5, -0.083333], name: "London, United Kingdom", year: "1908" },
    { coordinates: [59.33333333, 18.05], name: "Stockholm, Sweden", year: "1912" },
    { coordinates: [51.260197, 4.402771], name: "Antwerp, Belgium", year: "1920" },
    { coordinates: [48.86666667, 2.333333], name: "Paris, France", year: "1924" },
    { coordinates: [52.35, 4.916667], name: "Amsterdam, Netherlands", year: "1928" },
    { coordinates: [34.0522, -118.2437], name: "Los Angeles, United States", year: "1932" },
    { coordinates: [52.51666667, 13.4], name: "Berlin, Germany", year: "1936" },
    { coordinates: [51.5, -0.083333], name: "London, United Kingdom", year: "1948" },
    { coordinates: [60.16666667, 24.933333], name: "Helsinki, Finland", year: "1952" },
    { coordinates: [-37.8136, 144.9631], name: "Melbourne, Australia", year: "1956" },
    { coordinates: [41.9, 12.483333], name: "Rome, Italy", year: "1960" },
    { coordinates: [35.68333333, 139.75], name: "Tokyo, Japan", year: "1964" },
    { coordinates: [19.43333333, -99.133333], name: "Mexico City, Mexico", year: "1968" },
    { coordinates: [48.1351, 11.582], name: "Munich, West Germany", year: "1972" },
    { coordinates: [45.5017, -73.5673], name: "Montreal, Canada", year: "1976" },
    { coordinates: [55.75, 37.6], name: "Moscow, Soviet Union", year: "1980" },
    { coordinates: [34.0522, -118.2437], name: "Los Angeles, United States", year: "1984" },
    { coordinates: [37.55, 126.983333], name: "Seoul, South Korea", year: "1988" },
    { coordinates: [41.3851, 2.1734], name: "Barcelona, Spain", year: "1992" },
    { coordinates: [33.749, -84.388], name: "Atlanta, United States", year: "1996" },
    { coordinates: [-33.8688, 151.2093], name: "Sydney, Australia", year: "2000" },
    { coordinates: [37.98333333, 23.733333], name: "Athens, Greece", year: "2004" },
    { coordinates: [39.91666667, 116.383333], name: "Beijing, China", year: "2008" },
    { coordinates: [51.5, -0.083333], name: "London, United Kingdom", year: "2012" }
];

var northwinterlocation = [
    { coordinates: [61.1153, 10.4662], name: "Lillehammer, Norway", year: "1994", gold: "+28%" }
];

var southwinterlocation = [
    { coordinates: [36.6513, 138.181], name: "Nagano, Japan", year: "1998", gold: "+800%" }
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

var northwinterMarkers = [L.marker([61.1153, 10.4662], { icon: redIcon }).bindPopup("<h1> Lillehammer, Norway</h1> <hr> <h3>Year: 1994</h3> <h3>Gold Medal Increase: +28%</h3>")];
var southwinterMarkers = [L.marker([36.6513, 138.181], { icon: redIcon }).bindPopup("<h1> Nagano, Japan</h1> <hr> <h3>Year: 1998</h3> <h3>Gold Medal Increase: +800%</h3>")];

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


//populate select element with possible gender values
gendersUrl = "/fetch_genders";
Plotly.d3.json(gendersUrl, function (error, response) {
    if (error) console.log(error);
    genderList = ['All Genders'];
    for (var i = 0; i < response.length; i++) {
        genderList.push(response[i]);
    }
    //console.log(genderList);
    $genderSelectListStackedBar = document.getElementById("genderSelectStackedBar");
    $genderSelectListCumulativeLine = document.getElementById("genderSelectCumulativeLine");
    $genderSelectListDemographicScatter = document.getElementById("genderSelectDemographicScatter");
    $genderSelectListComparisonPie = document.getElementById("genderSelectComparisonPie");
    for (var i = 0; i < genderList.length; i++) {
        var $optionStackedBar = document.createElement("option");
        $optionStackedBar.value = genderList[i];
        $optionStackedBar.text = genderList[i];
        $genderSelectListStackedBar.appendChild($optionStackedBar);

        var $optionCumulativeLine = document.createElement("option");
        $optionCumulativeLine.value = genderList[i];
        $optionCumulativeLine.text = genderList[i];
        $genderSelectListCumulativeLine.appendChild($optionCumulativeLine);

        var $optionDemographicScatter = document.createElement("option");
        $optionDemographicScatter.value = genderList[i];
        $optionDemographicScatter.text = genderList[i];
        $genderSelectListDemographicScatter.appendChild($optionDemographicScatter);

        var $optionComparisonPie = document.createElement("option");
        $optionComparisonPie.value = genderList[i];
        $optionComparisonPie.text = genderList[i];
        $genderSelectListComparisonPie.appendChild($optionComparisonPie);
    }
});

//populate select element with possible medal values
medalsUrl = "/fetch_medals";
Plotly.d3.json(medalsUrl, function (error, response) {
    if (error) console.log(error);
    medalList = ['All Medal Types'];
    for (var i = 0; i < response.length; i++) {
        medalList.push(response[i]);
    }
    //console.log(medalList);
    $medalSelectListCumulativeLine = document.getElementById("medalSelectCumulativeLine");
    $medalSelectListDemographicScatter = document.getElementById("medalSelectDemographicScatter");
    $medalSelectListComparisonPie = document.getElementById("medalSelectComparisonPie");
    for (var i = 0; i < medalList.length; i++) {
        var $optionCumulativeLine = document.createElement("option");
        $optionCumulativeLine.value = medalList[i];
        $optionCumulativeLine.text = medalList[i];
        $medalSelectListCumulativeLine.appendChild($optionCumulativeLine);

        var $optionDemographicScatter = document.createElement("option");
        $optionDemographicScatter.value = medalList[i];
        $optionDemographicScatter.text = medalList[i];
        $medalSelectListDemographicScatter.appendChild($optionDemographicScatter);

        var $optionComparisonPie = document.createElement("option");
        $optionComparisonPie.value = medalList[i];
        $optionComparisonPie.text = medalList[i];
        $medalSelectListComparisonPie.appendChild($optionComparisonPie);
    }
});

//populate select element with possible sport values
sportsUrl = "/fetch_sports";
Plotly.d3.json(sportsUrl, function (error, response) {
    if (error) console.log(error);
    sportList = ['All Sports'];
    for (var i = 0; i < response.length; i++) {
        sportList.push(response[i]);
    }
    //console.log(sportList);
    $sportSelectListStackedBar = document.getElementById("sportSelectStackedBar");
    $sportSelectListCumulativeLine = document.getElementById("sportSelectCumulativeLine");
    $sportSelectListDemographicScatter = document.getElementById("sportSelectDemographicScatter");
    for (var i = 0; i < sportList.length; i++) {
        var $optionStackedBar = document.createElement("option");
        $optionStackedBar.value = sportList[i];
        $optionStackedBar.text = sportList[i];
        $sportSelectListStackedBar.appendChild($optionStackedBar);

        var $optionCumulativeLine = document.createElement("option");
        $optionCumulativeLine.value = sportList[i];
        $optionCumulativeLine.text = sportList[i];
        $sportSelectListCumulativeLine.appendChild($optionCumulativeLine);

        var $optionDemographicScatter = document.createElement("option");
        $optionDemographicScatter.value = sportList[i];
        $optionDemographicScatter.text = sportList[i];
        $sportSelectListDemographicScatter.appendChild($optionDemographicScatter);
    }
});

/* //populate select element with possible event values
//i am going to wait to implement this until i have the other pieces working
//if a sport is selected these will only include events for that sport
eventsUrl = `/fetch_events/${sportSelectList.value}`;
Plotly.d3.json(eventsUrl, function (error, response) {
    if (error) console.log(error);
    eventList = ['All'];
    for (var i=0;i<response.length;i++){
        eventList.push(response[i]);
    }
    console.log(eventList);
    $eventSelectList = document.getElementById("eventSelect");
    for (var i = 0; i < eventList.length; i++) {
        var $option = document.createElement("option");
        $option.value = eventList[i];
        $option.text = eventList[i];
        $eventSelectList.appendChild($option);
    }
}); */

//populate select element with possible year values
//i think this would be cooler as a slider but haven't figured out how to use that library yet....
yearsUrl = "/fetch_years";
Plotly.d3.json(yearsUrl, function (error, response) {
    if (error) console.log(error);
    yearList = ['All Years'];
    for (var i = 0; i < response.length; i++) {
        yearList.push(response[i]);
    }
    //console.log(yearList);
    $yearSelectListStackedBar = document.getElementById("yearSelectStackedBar");
    $yearSelectListComparisonPie = document.getElementById("yearSelectComparisonPie");
    for (var i = 0; i < yearList.length; i++) {
        var $optionStackedBar = document.createElement("option");
        $optionStackedBar.value = yearList[i];
        $optionStackedBar.text = yearList[i];
        $yearSelectListStackedBar.appendChild($optionStackedBar);

        var $optionComparisonPie = document.createElement("option");
        $optionComparisonPie.value = yearList[i];
        $optionComparisonPie.text = yearList[i];
        $yearSelectListComparisonPie.appendChild($optionComparisonPie);
    }
});

yearsUrl = "/fetch_years_demographics"
Plotly.d3.json(yearsUrl, function (error, response) {
    if (error) console.log(error);
    yearList = ['All Years'];
    for (var i = 0; i < response.length; i++) {
        yearList.push(response[i]);
    }
    console.log("Year List:")
    console.log(yearList);
    $yearSelectListDemographics = document.getElementById("yearSelectDemographicScatter");
    for (var i = 0; i < yearList.length; i++) {
        var $option = document.createElement("option");
        $option.value = yearList[i];
        $option.text = yearList[i];
        $yearSelectListDemographics.appendChild($option);
    }
});

//build demographic select list
demographicList = ['Population', 'GDP', 'Temperature'];
//console.log(demographicList);
$demographicSelectList = document.getElementById("demographicSelect");
for (var i = 0; i < demographicList.length; i++) {
    var $option = document.createElement("option");
    $option.value = demographicList[i];
    $option.text = demographicList[i];
    $demographicSelectList.appendChild($option);
}

//populate select element with possible country values
countriesUrl = "/fetch_countries";
Plotly.d3.json(countriesUrl, function (error, response) {
    if (error) console.log(error);
    countryList1 = ['Country 1'];
    countryList2 = ['Country 2'];
    for (var i = 0; i < response.length; i++) {
        countryList1.push(response[i]);
        countryList2.push(response[i]);
    }
    //console.log(countryList1);
    //console.log(countryList2);
    $countrySelectListComparisonPlots1 = document.getElementById("countrySelectComparisonPlots1");
    $countrySelectListComparisonPlots2 = document.getElementById("countrySelectComparisonPlots2");
    for (var i = 0; i < countryList1.length; i++) {
        var $optionComparisonPlots1 = document.createElement("option");
        $optionComparisonPlots1.value = countryList1[i];
        $optionComparisonPlots1.text = countryList1[i];
        $countrySelectListComparisonPlots1.appendChild($optionComparisonPlots1);

        var $optionComparisonPlots2 = document.createElement("option");
        $optionComparisonPlots2.value = countryList2[i];
        $optionComparisonPlots2.text = countryList2[i];
        $countrySelectListComparisonPlots2.appendChild($optionComparisonPlots2);
    }
    optionChangedStackedBar();
    optionChangedComparisonCharts();
    optionChangedDemographicScatter();
});

function optionChangedStackedBar() {
    //set url for flask route using select objects
    medalDataUrl = `/stacked_bar_chart/${$genderSelectListStackedBar.value}/${$sportSelectListStackedBar.value}/${$yearSelectListStackedBar.value}`;

    //get info from flask route
    Plotly.d3.json(medalDataUrl, function (error, response) {

        //get data from response object
        countriesToPlot = response.countries;
        bronzeData = response.bronze_data;
        silverData = response.silver_data;
        goldData = response.gold_data;

        //set up data traces
        var bronzeTrace = {
            x: countriesToPlot,
            y: bronzeData,
            name: 'bronze',
            type: 'bar',
            marker: {
                color: 'rgb(205, 127, 50)'
            }
        };

        var silverTrace = {
            x: countriesToPlot,
            y: silverData,
            name: 'silver',
            type: 'bar',
            marker: {
                color: 'rgb(192,192,192)'
            }
        };

        var goldTrace = {
            x: countriesToPlot,
            y: goldData,
            name: 'gold',
            type: 'bar',
            marker: {
                color: 'rgb(255,215,0)'
            }
        };

        //put traces into data array
        var data = [bronzeTrace, silverTrace, goldTrace];

        //set layout for chart
        var layout = {
            barmode: 'stack',
            xaxis: {
                title: 'Country',
                tickangle: -45
            },
            yaxis: {
                title: 'Number of Medals Won'
            },
            title: 'Number of Medals Won per Country'
        };

        //create plot
        Plotly.newPlot('stackedBar', data, layout);
    });
}

function optionChangedComparisonCharts() {
    console.log(`Gender: ${$genderSelectListCumulativeLine.value}`);
    console.log(`Medal Type: ${$medalSelectListCumulativeLine.value}`);
    console.log(`Sport: ${$sportSelectListCumulativeLine.value}`);
    console.log(`Country 1: ${$countrySelectListComparisonPlots1.value}`);
    console.log(`Country 2: ${$countrySelectListComparisonPlots2.value}`);
    cumulativeLineUrl = `/cumulative_line_plot/${$genderSelectListCumulativeLine.value}/${$sportSelectListCumulativeLine.value}/${$medalSelectListCumulativeLine.value}/${$countrySelectListComparisonPlots1.value}/${$countrySelectListComparisonPlots2.value}`;
    cumulativePieUrl = `/comparison_pie_plot/${$genderSelectListComparisonPie.value}/${$yearSelectListComparisonPie.value}/${$medalSelectListComparisonPie.value}/${$countrySelectListComparisonPlots1.value}/${$countrySelectListComparisonPlots2.value}`;
    if ($countrySelectListComparisonPlots1.value === 'Country 1' || $countrySelectListComparisonPlots2.value === 'Country 2' || $countrySelectListComparisonPlots1.value === $countrySelectListComparisonPlots2.value) {
        console.log("Please select two unique countries to compare!")
    }
    else {
        Plotly.d3.json(cumulativeLineUrl, function (error, response) {
            if (error) {
                console.log(error);
            }
            country1Medals = response.country1;
            country2Medals = response.country2;
            yearsToPlot = response.years;
            country1_select = $countrySelectListComparisonPlots1.value;
            country2_select = $countrySelectListComparisonPlots2.value;
            console.log(country1Medals);
            console.log(country2Medals);
            console.log(yearsToPlot);

            //plotly line graph

            var cum_country1 = {
                x: yearsToPlot,
                y: country1Medals,
                mode: 'line',
                name: country1_select
            };
            //from second filter dropdown
            var cum_country2 = {
                x: yearsToPlot,
                y: country2Medals,
                mode: 'line',
                name: country2_select
            };

            var data = [cum_country1, cum_country2];

            var layout = {
                title: 'Cummulative Medal Count',
                xaxis: {
                    title: 'Year',
                    linecolor: 'black',
                    mirror: true
                },
                yaxis: {
                    title: 'Medal Count',
                    linecolor: 'black',
                    mirror: true
                }
            };

            Plotly.newPlot('countryComparisonPlot', data, layout);

        });

        Plotly.d3.json(cumulativePieUrl, function (error, response) {
            if (error) {
                console.log(error);
            }
            country1Medals = response.country1;
            country2Medals = response.country2;
            sportsToPlot = response.sports;
            console.log(country1Medals);
            console.log(country2Medals);
            console.log(sportsToPlot);
            // PieChart    

            var sports = ['Bobsled', 'Cross-Country Skiing', 'Curling', 'Figure Skating', 'Ice Hockey', 'Biathlon', 'Nordic Combined', 'Ski Jumping', 'Speedskating',
                'Skeleton', 'Alpine Skiing', 'Luge', 'Freestyle Skiing', 'Short-Track Speedskating', 'Snowboarding']

            var colors = ['rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,255,0)', 'rgb(0,255,255)', 'rgb(255,0,255)', 'rgb(192,192,192)',
                'rgb(128,0,0)', 'rgb(0,128,0)', 'rgb(128,0,128)', 'rgb(0,128,128)', 'rgb(0,0,128)', 'rgb(255,215,0)', 'rgb(255,69,0)']

            var country1_pie = [{
                values: country1Medals,
                labels: sports,
                type: 'pie',
                marker: {
                    colors: colors
                }
            }];

            var layout = {
                height: 400,
                width: 500

            };

            var country2_pie = [{
                values: country2Medals,
                labels: sports,
                type: 'pie',
                marker: {
                    colors: colors
                }
            }];

            var layout1 = {
                height: 400,
                width: 500,
                title: country1_select
            };

            var layout2 = {
                height: 400,
                width: 500,
                title: country2_select
            };

            Plotly.newPlot('countryComparisonPie1', country1_pie, layout1);
            Plotly.newPlot('countryComparisonPie2', country2_pie, layout2);
        });
    }

}

function optionChangedDemographicScatter() {
    demographicUrl = `/demographic_scatter_plot/${$genderSelectListDemographicScatter.value}/${$sportSelectListDemographicScatter.value}/${$medalSelectListDemographicScatter.value}/${$yearSelectListDemographics.value}/${$demographicSelectList.value}`
    Plotly.d3.json(demographicUrl, function (error, response) {
        if (error) {
            console.log(error);
        }
        medalCount = response.medal_list;
        demographicValues = response.demographic_list;
        countryList = response.country_list
        year = $yearSelectListDemographics.value
        var trace = {
            x: demographicValues,
            y: medalCount,
            mode: 'markers',
            type: 'scatter',
            name: 'country vs medals',
            text: countryList,
            marker: { size: 12 }
        };
        console.log($demographicSelectList.value)
        if ($demographicSelectList.value == 'Population') {
            var layout = {
                xaxis: {
                    type: 'log',
                    autorange: true,
                    linecolor: 'black',
                    mirror: true,
                    title: "Population (millions)"
                },
                title: 'Medal Count vs. Population'
            };
            trace["marker"] = { size: 12, color: 'green' };
        }
        else if ($demographicSelectList.value == 'GDP') {
            var layout = {
                xaxis: {
                    type: 'log',
                    autorange: true,
                    linecolor: 'black',
                    mirror: true,
                    title: "GDP (USD)"
                },
                title: 'Medal Count vs.GDP'
            };
            trace["marker"] = { size: 12, color: 'red' };
        }
        else if ($demographicSelectList.value == 'Temperature') {
            var layout = {
                xaxis: {
                    linecolor: 'black',
                    mirror: true,
                    title: 'Temperature'
                },
                title: 'Medal Count vs.Temperature'
            };
            trace["marker"] = { size: 12, color: 'purple' };
        }
        layout["yaxis"] = { linecolor: 'black', mirror: true, title: "Number of Medals" };
        var data = [trace];
        Plotly.newPlot('demographicScatterPlot', data, layout);
    });
}