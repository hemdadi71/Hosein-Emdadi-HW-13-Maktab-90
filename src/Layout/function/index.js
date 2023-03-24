import { Routes } from '@/Routes'
import { WetherPage } from '@/Screens/Wether'
import { displayWeather, getApi, InputFocusOut } from '@/Screens/Wether/Function'
import Cookies from 'js-cookie'

const windowLoad = () => {
  const handleGoShop = () => {
    const token = Cookies.get('token')
    if (token) {
      history.pushState(null, null, '/weather')
      const main = document.getElementById('main')
      main.innerHTML = ''
      main.appendChild(WetherPage())
      document.body.style.backgroundImage = `url('../../src/Assets/images/timothy-lake-oregon-2560x1080-9773.jpg')`
      getApi('tehran').then(response => displayWeather(response))
      InputFocusOut()
    } else {
      history.pushState(null, null, '/signin')
      Routes()
    }
  }
  window.addEventListener('load', handleGoShop)
}
export default windowLoad
