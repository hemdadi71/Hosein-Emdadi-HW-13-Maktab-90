import { API } from '@/API/Function'
import {
  handleValidationEmail,
  handleValidationPassword,
  ValidationText,
} from '@/Components'

export const handleSetData = e => {
  e.preventDefault()

  const email = e.target.email
  const password = e.target.password
  const item = {
    id: Date.now(),
    email: email.value,
    password: password.value,
  }
  const signupEmail = document.getElementById('signupEmail')
  const signupPassword = document.getElementById('signupPassword')
  const reEnterPass = document.getElementById('reEnterPass')
  const emptyEmail = document.getElementById('emptyEmail')
  const emptyPassword = document.getElementById('emptyPassword')
  const emptyReenterPass = document.getElementById('emptyReenterPass')
  if (!signupEmail.childNodes[0].childNodes[0].value) {
    e.currentTarget.dataset.validation = '0'
    if (emptyEmail) return
    signupEmail.append(
      ValidationText({
        text: 'required',
        className: 'text-red-500 text-left ml-3',
        id: 'emptyEmail',
      })
    )
  } else {
    e.currentTarget.dataset.validation = '1'
    if (emptyEmail) {
      emptyEmail.remove()
    }
  }
  // .............................
  if (!signupPassword.childNodes[0].childNodes[0].value) {
    e.currentTarget.dataset.validation = '0'

    if (emptyPassword) return
    signupPassword.append(
      ValidationText({
        text: 'required',
        className: 'text-red-500 text-left ml-3',
        id: 'emptyPassword',
      })
    )
  } else {
    e.currentTarget.dataset.validation = '1'
    if (emptyPassword) {
      emptyPassword.remove()
    }
  }
  // ............................................
  if (!reEnterPass.childNodes[0].childNodes[0].value) {
    e.currentTarget.dataset.validation = '0'

    if (emptyReenterPass) return
    reEnterPass.append(
      ValidationText({
        text: 'required',
        className: 'text-red-500 text-left ml-3',
        id: 'emptyReenterPass',
      })
    )
  } else {
    e.currentTarget.dataset.validation = '1'
    if (emptyReenterPass) {
      emptyReenterPass.remove()
    }
  }
  // .......................................................
  if (e.currentTarget.dataset.validation === '1') {
    API.SetData(API.BaseUrl, API.Endpoint, item).then(response =>
      console.log(response)
    )
    e.currentTarget.reset()
  }
}
