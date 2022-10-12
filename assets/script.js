/*$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=f106cb5c37f0b0c8c275c495075a29f3",
function(response) {
  console.log(response);
}
);*/

fetch('http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=f106cb5c37f0b0c8c275c495075a29f3')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    today(data);
    futuredays(data);
  }); 

function today(data) {
  var location=data.name;
  var temp=data.main.temp;
  var wind=data.wind.speed;
  var humidity=data.main.humidity;
  var icon="https://openweathermap.org/img/w/01n.png";
 
  $('.icon').attr('src', icon);
  $('.today').append(location);
  $('.temperature').append(temp);
  $('.wind').append(wind);
  $('.humidity').append(humidity);
}

function futuredays (data) {
  var icon="https://openweathermap.org/img/w/" + data.weather.icon + ".png";
  $('.icon').attr('src', icon);

}


function search() {
var APIKeys = "f106cb5c37f0b0c8c275c495075a29f3";
var units = '&units=metric';
var API = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

input=$('.form-control');

var button = $(".searchBtn");
button.on("search", url);

var url = API + input.value() + APIKeys + units;
loadJSON(url, gotData);
$(".container").text(url);
}

function gotData(data) {
    weather=data;
}

