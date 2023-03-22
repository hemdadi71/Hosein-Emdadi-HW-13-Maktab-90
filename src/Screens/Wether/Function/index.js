import { Li } from '@/Components/card/Li-Input'
import El from '@/Library'
import { HomePage } from '@/Screens/Home'
let data = []
let result

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
  // document.body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?${name}')`
}
// const access_key = `OflEDCAHAePzXEJjIyxZPtdcIDsFWXUxPPEI2IjhTYc`
export function handleSearch(e) {
  const history = document.getElementById('history')
  if (e.target.value) {
    getApi(e.target.value).then(response => {
      displayWeather(response)
      console.log(response.main.temp)
      history.classList.add('hidden')
    })
    data.push(e.target.value)
    result = [...new Set(data.slice(-6))]
    localStorage.setItem('item', JSON.stringify(result))
  } else {
    history.classList.add('hidden')
  }
  // fetch(`https://api.unsplash.com/search/photos?query=london&client_id=${access_key}`)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
}
export function handleBack() {
  const main = document.getElementById('main')
  history.pushState(null, null, '/login')
  main.innerHTML = ''
  main.appendChild(HomePage())
  document.body.style.backgroundImage = `url('../../src/Assets/images/surreal-storm-boat-clouds-thunderstorm-ocean-5k-8k-2560x1080-9018.jpg')`
}
export function InputFocusIn() {
  const inputUL = document.getElementById('inputUL')
  const history = document.getElementById('history')
  const data = JSON.parse(localStorage.getItem('item'))
  if (data) {
    history.classList.remove('hidden')
    inputUL.innerHTML = ''
    data.map(item => {
      inputUL.prepend(Li({ child: item }))
    })
  }
}
export function InputFocusOut() {
  const searchInput = document.getElementById('searchInput')
  const removeHistory = document.getElementById('removeHistory')
  document.addEventListener('click', e => {
    const history = document.getElementById('history')
    if (e.target === removeHistory) {
      localStorage.removeItem('item')
      history.classList.add('hidden')
    } else if (e.target === searchInput) {
      InputFocusIn()
    } else {
      history.classList.add('hidden')
    }
  })
}
