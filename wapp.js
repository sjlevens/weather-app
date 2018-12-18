

const woeidSydney = 'Sydney';


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
    console.log(`The weather in ${data.location.name} is ${data.current.condition.text}, the current temp is ${data.current.temp_c}C, although it feels like ${data.current.feelslike_c}C.`);
});



