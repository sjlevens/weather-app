//console.log(`The weather in ${data.location.name} is ${data.current.condition.text}, the current temp is ${data.current.temp_c}C, although it feels like ${data.current.feelslike_c}C.`);

const woeidSydney = 'Sydney';
const DOMstrings = {
    city: '.city',
    time: '.time',
    condition: '.condition',
    conditionImg: '.condition-img',
    tempReal: '.temp-real',
    tempFeel: '.temp-feel',
    windSpeed: '.wind-speed',
    windDirection: '.wind-direction'
}


async function getWeather(city){
    try{
        const myAPIKey = '***';
        const weatherAPI = `https://api.apixu.com/v1/current.json?key=${myAPIKey}&q=`;

        const result = await fetch(`${weatherAPI}${city}`);
        const data = await result.json();
        return data;
        
    }catch(error){
        alert(error);
    }
}

let weather;
getWeather(woeidSydney).then(data => {
    weather = data;
    //console.log(weather);

    const updateWeather = function(weather){
        //console.log(DOMstrings);

        document.querySelector(DOMstrings.city).textContent = weather.location.name;
        document.querySelector(DOMstrings.time).textContent = weather.location.localtime;
        document.querySelector(DOMstrings.condition).textContent = weather.current.condition.text;
        document.querySelector(DOMstrings.conditionImg).src = `https:${weather.current.condition.icon}`;
        document.querySelector(DOMstrings.tempReal).textContent = `${weather.current.temp_c}C`;
        document.querySelector(DOMstrings.tempFeel).textContent = `${weather.current.feelslike_c}C`;
        document.querySelector(DOMstrings.windSpeed).textContent = `${weather.current.wind_kph} k/h`;
        document.querySelector(DOMstrings.windDirection).textContent = weather.current.wind_dir;

    }

    updateWeather(weather);


    
});



