
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var iconElement = document.querySelector(".weather-icon");

button.addEventListener('click', function (name) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {

      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      main.innerHTML = nameValue;
      desc.innerHTML = "Description - " + descValue;
      temp.innerHTML = "Temprature - " + tempValue;
      input.value = "";

    })

    .catch(err => alert("Please enter city name!"));
})