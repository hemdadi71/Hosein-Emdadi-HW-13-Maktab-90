import { Routes } from '@/Routes'
import {
  displayWeather,
  getApi,
  InputFocusOut,
} from '@/Screens/Wether/Function'

const windowLoad = () => {
  const handleGoShop = () => {
    history.pushState(null, null, '/signin')
    Routes()
    getApi('tehran').then(response => displayWeather(response))
  }
  window.addEventListener('load', handleGoShop)
}
export default windowLoad
