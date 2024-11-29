const apiKey="eb23eef5a57fdf061579ecd562160aeb";
const baseUrrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weathericon")
async function checkWeather(city) {
    const response = await fetch(baseUrrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp ) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";


}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);

})
