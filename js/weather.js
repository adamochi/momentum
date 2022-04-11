const API_KEY = "ca0a1ab3f12d28b20f38d1c2d0459f38";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


// {"coord":{"lon":153.0334,"lat":-27.4521},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"base":"stations","main":{"temp":292.97,"feels_like":293.51,"temp_min":292.19,"temp_max":293.9,"pressure":1008,"humidity":96},"visibility":10000,"wind":{"speed":6.17,"deg":180},"rain":{"1h":1.03},"clouds":{"all":75},"dt":1648463164,"sys":{"type":2,"id":2005393,"country":"AU","sunrise":1648410905,"sunset":1648453855},"timezone":36000,"id":7839562,"name":"Brisbane","cod":200}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// ca0a1ab3f12d28b20f38d1c2d0459f38