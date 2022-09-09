    const API_KEY = `62d84794c2fe8257209e6bfbd6d5172c`
    const form = document.querySelector("form")
    const weather = document.querySelector("#weather")
    const search = document.querySelector("#search")

// const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    

    const getWeather = async(city) =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric)`
        const response = await fetch(url)
        const data = await response.json()
        // console.log(da
        return showWeather(data)
    } 

    const showWeather = (data) => {
        if(data.cod=="404"){
            weather.innerHTML = `city not found `
            return;
        }
        console.log(data)
            weather.innerHTML=`
            <div>
            <img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4> ${data.weather[0].main}</h4>
                <h5> Wind: ${data.wind.speed}</h5>
                </div>
                <div>
                
                </div>
        </div>`
    }

    form.addEventListener(
        "submit",
        function(event){
            getWeather(search.value)
            event.preventDefault();
        }
    )