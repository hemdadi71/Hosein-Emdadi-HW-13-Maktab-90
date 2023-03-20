import { API } from '@/API/Function'
import { ValidationText } from '@/Components'
import { WetherPage } from '@/Screens/Wether'
import { displayWeather, getApi } from '@/Screens/Wether/Function'

export const handleSignIn = e => {
  e.preventDefault()
  const signinPassword = document.getElementById('signinPassword')
  const signinUserName = document.getElementById('signinUserName')
  API.GetData(API.BaseUrl, API.Endpoint).then(response => {
    response.find(item => {
      if (
        e.target.email.value === item.email &&
        e.target.password.value === item.password
      ) {
        const main = document.getElementById('main')
        main.innerHTML = ''
        main.appendChild(WetherPage())
        history.pushState(null, null, '/weather')
        getApi('tehran').then(response => displayWeather(response))
      }
      if (e.target.email.value) {
        if (item.email !== e.target.email.value) {
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
      } else {
        if (signinUserName.childNodes[1]) {
          signinUserName.childNodes[1].remove()
        }
      }
      // ..............................................................................
      if (e.target.password.value) {
        if (item.password !== e.target.password.value) {
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
          item.password !== e.target.password.value &&
          item.email !== e.target.email.value
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
        if (item.password !== e.target.password.value) {
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
      }
      // ...........................................................
      if (!e.target.password.value && e.target.email.value) {
        if (item.email !== e.target.email.value) {
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
    })
  })
}
