$(document).ready(function() {

var APIKEY = "386103396a97703ef2671e2dec26e1c2";

//local storage setup
// if (!localStorage.getItem("cityHistory")){
//   var cityHistory = [
//     {cityName: "Chapel Hill"}
//   ]
// } else {
//   var cityHistory = JSON.Parse(localStorage.getItem("cityHistory"))
//   localStorage.setItem("cityHistory", JSON.stringify(plannerTable))
// }


if ("geolocation" in navigator) {
  console.log('true')
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    getCurrentFromCoordinates(position.coords.latitude, position.coords.longitude)
  })
} else {
  /* geolocation IS NOT available */
  console.log('false')
}
//should be the current location
// var cityName= "Chapel Hill"
// var startURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&APPID=" + APIKEY;

// getCurrentWeather(cityName);
// getFiveDayForecast(cityName)

function getCurrentFromCoordinates(lat, lon){
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?" + "lat=" + lat + "&lon=" + lon + "&units=imperial" + "&APPID=" + APIKEY,
    method: "GET",
  }).then(function(response){
    console.log(response)
    getFiveDayForecast(response.name)
    addToHistory(response.name)
    getUVIndex(response.coord.lat, response.coord.lon);
    $("headerCity").text("Your current location is " + response.name)
    $("#currentIcon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
    $("#headerCity").text(response.name);
    $("#currentCity").text(response.name);
    $("#currentDate").text(moment().format('MMMM Do, YYYY'));
    $("#currentTemperature").text("Current Temperature: " + response.main.temp + "°");
    $("#currentHumidity").text("Humidity: " + response.main.humidity + "%");
    $("#currentWindSpeed").text("Wind Speed: " + response.wind.speed + " mph");
    })
}

function getCurrentWeather(cityName){
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&APPID=" + APIKEY,
    method: "GET",
  }).then(function(response){
    console.log(response)
    getUVIndex(response.coord.lat, response.coord.lon);
    $("#currentIcon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")
    $("#headerCity").text(response.name);
    $("#currentCity").text(response.name);
    $("#currentDate").text(moment().format('MMMM Do, YYYY'));
    $("#currentTemperature").text("Current Temperature: " + response.main.temp + "°");
    $("#currentHumidity").text("Humidity: " + response.main.humidity + "%");
    $("#currentWindSpeed").text("Wind Speed: " + response.wind.speed + " mph");
    
    })
}

// getFiveDayForecast("https://api.openweathermap.org/data/2.5/forecast?q=" + "miami" + "&units=imperial" + "&APPID=" + APIKEY)
function getFiveDayForecast(cityName){
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial" + "&APPID=" + APIKEY,
    method: "GET",
  }).then(function(response){
    var fiveDayForecast = [];
    for (i = 0; i < response.list.length; i++){
      var hr = (response.list[i].dt_txt.split(" "))[1]
      if (hr === "12:00:00"){
        fiveDayForecast.push(response.list[i])
      }
    }
    for (i = 0; i < fiveDayForecast.length; i++){
      $("#day" + (i+1)).empty();
      var newDivDate = $("<div>");
      newDivDate.text((moment(fiveDayForecast[i].dt_txt).format("MM/DD/YYYY"))
      );
      var newImgIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + fiveDayForecast[i].weather[0].icon + "@2x.png")
      var newDivTemp = $("<div>");
      newDivTemp.text(fiveDayForecast[i].main.temp + "°");
      var newDivHumidity = $("<div>");
      newDivHumidity.text(fiveDayForecast[i].main.humidity + "% Humidity")

      $("#day" + (i+1)).append(newDivDate, newImgIcon, newDivTemp, newDivHumidity);

    }
    console.log(response)
    console.log(fiveDayForecast)

    // for(var i = 0; i <= 5; i++){
    //   var newDivDate = $("<div>")
    //   newDivDate.text(response.list[(i+7) + (i*8)].dt_txt);
    //   (console.log(response.list[(i+7) + (i*8)].dt_txt))
    //   var newDivTemp = $("<div>")
    //   newDivTemp.text(response.list[(i+7) + (i*8)].main.temp);

    //   $("#day" + (i+1)).append(newDivDate);
    //   $("#day" + (i+1)).append(newDivTemp);
    // }
  })
}

function getUVIndex(lat, lon){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/uvi/forecast?&lat=" + lat + "&lon=" + lon + "&cnt=1" + "&APPID=" + APIKEY,
    method:"GET",
  }).then(function(response){
    console.log(response)
    $("#currentUVIndex").text("UV Index: " + response[0].value);
  }) 
}

function addToHistory(cityName){
  var newA = $("<a>");
  newA.attr("class","panel-block");
  newA.text(cityName);
  newA.attr("id", cityName);
  $("#cityHistoryContainer").prepend(newA);
}

function clear(){
  $("#cityHistoryContainer").text("")
}

// https://www.hashbangcode.com/article/prevent-enter-key-submitting-forms-jquery
$("#citySearch").on('keydown', function(e){
  if (e.keyCode == 13) {
    e.preventDefault();
    var cityName= $(this).val()
    var queryURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&APPID=" + APIKEY;
    // console.log(queryURL)
    addToHistory(cityName);
    getCurrentWeather(cityName);
    getFiveDayForecast(cityName);
    
  }
})

$("#cityHistoryContainer").on('click', function(e){
  if (e.target.matches('a')) {
    e.preventDefault();
    // change this later to data id
    var cityName= (e.target.id);
    console.log(cityName);
    getCurrentWeather(cityName);
    getFiveDayForecast(cityName);
  }
})

$("#clear").on('click', function(e){
  clear();
})



})