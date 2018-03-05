//populate select element with possible gender values
gendersUrl = "/genders";
Plotly.d3.json(gendersUrl, function (error, response) {
    if (error) console.log(error);
    genderList = ['All'];
    for (var i=0;i<response.length;i++){
        genderList.push(response[i]);
    }
    console.log(genderList);
    $genderSelectList = document.getElementById("genderSelect");
    for (var i = 0; i < genderList.length; i++) {
        var $option = document.createElement("option");
        $option.value = genderList[i];
        $option.text = genderList[i];
        $genderSelectList.appendChild($option);
    }
});

//populate select element with possible medal values
medalsUrl = "/medals";
Plotly.d3.json(medalsUrl, function (error, response) {
    if (error) console.log(error);
    medalList = ['All'];
    for (var i=0;i<response.length;i++){
        medalList.push(response[i]);
    }
    console.log(medalList);
    $medalSelectList = document.getElementById("medalSelect");
    for (var i = 0; i < medalList.length; i++) {
        var $option = document.createElement("option");
        $option.value = medalList[i];
        $option.text = medalList[i];
        $medalSelectList.appendChild($option);
    }
    optionChanged();
});

function optionChanged() {
    //get medal data
    medalDataUrl = `/data_by_country_filtered/${$genderSelectList.value}/${$medalSelectList.value}`;
    Plotly.d3.json(medalDataUrl, function (error, response) {
        console.log('The data for the given filters is: ')
        console.log(response);
    });
}