const submitButton = document.getElementById('submitbutton')
const cityname = document.getElementById('cityname')
const city_name = document.getElementById('city_name')
const day = document.getElementById('day')
const temp_real_val = document.getElementById('temp_real_val')
const Date_data = document.getElementById('today_data')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer')
const des = document.getElementById('description')




let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day1 = currentDate.getDate();

let dayOfWeek = currentDate.getDay();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = "Day : " + daysOfWeek[dayOfWeek];

const formattedDate = "Date : " + (day1 < 10 ? '0' + day1 : day1) + '-' + (month < 10 ? '0' + month : month) + '-' + year;
day.innerText = currentDay;
Date_data.innerText = formattedDate

const getinfo = async (e) => {
    e.preventDefault();
    let cityVal = cityname.value;

    if (cityVal === "") {
        city_name.innerText = "Please Enter the city name first"
        datahide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c07880a43b80ab977139c00c423e40be&units=metric`

            const res = await fetch(url);
            const resJson = await res.json();

            const arrData = [resJson];
            const weather_mood = arrData[0].weather[0].main
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`

            temp_real_val.innerText = arrData[0].main.temp;

            if (weather_mood == "Clear") {
                temp_status.innerHTML = "<img src='images/clear.png'/>"
            }
            else if (weather_mood == "Clouds") {
                temp_status.innerHTML = "<img src='images/clouds.png'/>"
            }
            else if (weather_mood == "Drizzel") {
                temp_status.innerHTML = "<img src='images/drizzel.png'/>"
            }
            else if (weather_mood == "Rain") {
                temp_status.innerHTML = "<img src='images/rainr.png'/>"
            }
            else if (weather_mood == "Snow") {
                temp_status.innerHTML = "<img src='images/snow.png'/>"
            }
            else if (weather_mood == "Mist") {
                temp_status.innerHTML = "<img src='images/mist.png'/>"
            }
            else if (weather_mood == "Haze") {
                temp_status.innerHTML = "<img src='images/clear.png'/>"
            }
            else {
                temp_status.innerHTML = "<img src='images/clouds.png'/>"
            }
            des.innerText = arrData[0].weather[0].description

            datahide.classList.remove('data_hide')

        }
        catch {
            city_name.innerText = "Enter the city name properly"
        }
    }
}

submitButton.addEventListener("click", getinfo)