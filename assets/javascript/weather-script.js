var now = moment().format("MM/DD/YYYY")
var city;

$("#cities-form").submit(function(e){
    e.preventDefault();
    city = $("#userPick").val()
    todaysWeather(city);
    populateList();
})

$("#clear-text").on("click", function(e){
    $(".cities").text("");
    $("#search-history").text("");

});

// When they submit the city to view the weather I want to call the function that gets the desired information using ajax. 
// and then call the function that prints the information to my city holder div in index.html

function todaysWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=166a433c57516f51dfab1f7edaed8413&units=imperial"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (city){

        var specificCity = $("<div>")
        var header = $("<h3>" + city.name + " " + now + " " + "</h3>" )
        var icon = $("<img>")
        icon.attr("src", "http://openweathermap.org/img/wn/" + city.weather[0].icon+".png")
        var pTemp = $("<p> Temperature: " + city.main.temp + " F </p>") 
        var pHumidity = $("<p> Humidity: " + city.main.humidity + "</p>")
        var pWindSpeed = $("<p> Wind Speed: " + city.wind.speed + " mph </p>")


        specificCity.prepend(header, icon, pTemp, pHumidity, pWindSpeed);
        $(".cities").prepend(specificCity);
        specificCity.addClass("city-display");
    }) 
}


function populateList() {
    // console.log("runnin")
    var listEl =  $("<li> </li>")
    listEl.text($("#userPick").val())
    listEl.attr("data-city", $("#userPick").val())
    $("#search-history").prepend(listEl)
    listEl.addClass("listItems")
   
}

$("#search-history").on("click", function(e){
    var cityName = e.target.textContent
    todaysWeather(cityName)
})