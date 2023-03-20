import { HomePage } from '@/Screens/Home'

const apikey = 'cadf46d32755c9f68716995340ec5ea2'
export async function getApi(city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
  )
  response = await response.json()
  return response
}
export function displayWeather(data) {
  const { name } = data
  const { icon, description } = data.weather[0]
  const { temp, humidity } = data.main
  const { speed } = data.wind
  const city = document.getElementById('city')
  const temperture = document.getElementById('temp')
  const iconDisplay = document.getElementById('icon')
  const descriptionDisplay = document.getElementById('description')
  const humidityDisplay = document.getElementById('humidity')
  const windDisplay = document.getElementById('wind')
  iconDisplay.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
  city.innerHTML = `Weather in ${name}`
  descriptionDisplay.innerHTML = description
  temperture.innerText = `${temp}°C`
  humidityDisplay.innerText = `Humidity ${humidity}%`
  windDisplay.innerText = `Wind speed ${speed} km/h`
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?${name}')`
}

export function handleSearch(e) {
  getApi(e.target.value).then(response => displayWeather(response))
}
export function handleBack() {
  const main = document.getElementById('main')
  history.pushState(null, null, '/login')
  main.innerHTML = ''
  main.appendChild(HomePage())
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?weather')`
}
