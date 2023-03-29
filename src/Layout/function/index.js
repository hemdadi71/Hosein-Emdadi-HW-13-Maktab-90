import { CardDisplay } from '@/Components/card/Function'
import { ErrorBox } from '@/Components/Error'
import { Display } from '@/Components/Light&Dark'
import { AddLight_Dark } from '@/Components/Light&Dark/Function'
import { LoadingBox } from '@/Components/Loading'
import ActiveItem from '@/Components/Navbar/Function'
import { Routes } from '@/Routes'
import { HomePage } from '@/Screens/Home'
import { WetherPage } from '@/Screens/Wether'
import {
  displayWeather,
  getApi,
  InputFocusOut,
} from '@/Screens/Wether/Function'
import Cookies from 'js-cookie'

const windowLoad = () => {
  const handleGoShop = () => {
    const token = Cookies.get('token')
    if (token) {
      history.pushState(null, null, '/weather')
      const main = document.getElementById('main')
      main.innerHTML = ''
      main.append(WetherPage(), LoadingBox(), ErrorBox())
      CardDisplay()
      document.body.style.backgroundImage = `url('../../src/Assets/images/timothy-lake-oregon-2560x1080-9773.jpg')`
      getApi('tehran').then(response => displayWeather(response))
      InputFocusOut()
      AddLight_Dark()
    } else {
      history.pushState(null, null, '/signin')
      document.body.style.backgroundImage = `url('../../src/Assets/images/lake-tahoe-zephyr-2560x1080-9778.jpg')`
      main.innerHTML = ''
      main.append(HomePage(), LoadingBox())
      Routes()
      AddLight_Dark()
    }
  }
  window.addEventListener('load', handleGoShop)
}
export default windowLoad
