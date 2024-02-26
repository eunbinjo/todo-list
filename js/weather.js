const API_KEY = "f451f95c4860ae82192e0ed7f8897e95";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.main.temp}℃`;
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
