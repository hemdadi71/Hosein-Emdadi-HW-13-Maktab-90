import { API } from '@/API/Function'
import { ValidationText } from '@/Components'
import { WetherPage } from '@/Screens/Wether'
import Cookies from 'js-cookie'
import {
  displayWeather,
  getApi,
  InputFocusOut,
} from '@/Screens/Wether/Function'
import { AddLoading, RemoveLoading } from '@/Components/Loading/Function'
import { LoadingBox } from '@/Components/Loading'
import { ErrorBox } from '@/Components/Error'
import { SuccessBox } from '@/Components/Success'
import { AddSuccess } from '@/Components/Success/Function'
import { Display } from '@/Components/Light&Dark'
import { CardDisplay } from '@/Components/card/Function'

export const handleSignIn = e => {
  e.preventDefault()
  const signinPassword = document.getElementById('signinPassword')
  const signinUserName = document.getElementById('signinUserName')
  API.GetData(API.BaseUrl, API.Endpoint).then(response => {
    const correct = response.find(
      item =>
        e.target.email.value === item.email &&
        e.target.password.value === item.password
    )
    if (correct) {
      const token = `JWT_ljlfdksfiwWfjig12jglk@gfgdg%ggf`
      Cookies.set('token', token, {
        expires: 1,
      })
      const main = document.getElementById('main')
      main.append(SuccessBox('SignIn'))
      AddSuccess()
      setTimeout(() => {
        main.innerHTML = ''
        main.append(WetherPage(), LoadingBox(), ErrorBox(), Display())
        history.pushState(null, null, '/weather')
        CardDisplay()
        AddLoading()
        getApi('tehran').then(response => {
          displayWeather(response)
          RemoveLoading()
        })
        document.body.style.backgroundImage = `url('../../src/Assets/images/timothy-lake-oregon-2560x1080-9773.jpg')`
        InputFocusOut()
      }, 1000)
    } else {
      if (e.target.email.value) {
        if (signinUserName.childNodes[1]) return
        signinUserName.append(
          ValidationText({
            text: 'email is invalid',
            className: 'text-red-500 text-left ml-3',
          })
        )
      } else {
        if (signinUserName.childNodes[1]) {
          signinUserName.childNodes[1].remove()
        }
      }
    }
    // ..............................................................................
    if (e.target.password.value) {
      if (signinPassword.childNodes[1]) return
      signinPassword.append(
        ValidationText({
          text: 'password is invalid',
          className: 'text-red-500 text-left ml-3',
        })
      )
    } else {
      if (signinPassword.childNodes[1]) {
        signinPassword.childNodes[1].remove()
      }
    }
    // ............................................................
    if (!e.target.password.value && !e.target.email.value) {
      if (signinPassword.childNodes[1]) {
        signinPassword.childNodes[1].remove()
      }
      if (signinUserName.childNodes[1]) {
        signinUserName.childNodes[1].remove()
      }
    }
    // ....................................................................................
    if (e.target.password.value && e.target.email.value) {
      if (
        correct.password !== e.target.password.value &&
        correct.email !== e.target.email.value
      ) {
        if (signinPassword.childNodes[1]) return
        if (signinUserName.childNodes[1]) return
        signinPassword.append(
          ValidationText({
            text: 'password is invalid',
            className: 'text-red-500 text-left ml-3',
          })
        )
        signinUserName.append(
          ValidationText({
            text: 'email is invalid',
            className: 'text-red-500 text-left ml-3',
          })
        )
      } else {
        if (signinPassword.childNodes[1]) {
          signinPassword.childNodes[1].remove()
        }
        if (signinUserName.childNodes[1]) {
          signinUserName.childNodes[1].remove()
        }
      }
    } else {
      if (signinPassword.childNodes[1]) {
        signinPassword.childNodes[1].remove()
      }
      if (signinUserName.childNodes[1]) {
        signinUserName.childNodes[1].remove()
      }
    }
    // .....................................................
    if (e.target.password.value && !e.target.email.value) {
      if (signinPassword.childNodes[1]) return
      signinPassword.append(
        ValidationText({
          text: 'password is invalid',
          className: 'text-red-500 text-left ml-3',
        })
      )
    } else {
      if (signinPassword.childNodes[1]) {
        signinPassword.childNodes[1].remove()
      }
    }
    // ...........................................................
    if (!e.target.password.value && e.target.email.value) {
      if (signinUserName.childNodes[1]) return
      signinUserName.append(
        ValidationText({
          text: 'email is invalid',
          className: 'text-red-500 text-left ml-3',
        })
      )
    } else {
      if (signinUserName.childNodes[1]) {
        signinUserName.childNodes[1].remove()
      }
    }
  })
}
