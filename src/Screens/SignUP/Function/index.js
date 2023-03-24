import { API } from '@/API/Function'
import {
  emailPattern,
  handleValidationEmail,
  handleValidationPassword,
  passwordPattern,
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
  const emailValid = document.getElementById('emailValid')
  if (!signupEmail.childNodes[0].childNodes[0].value) {
    if (emptyEmail) return
    signupEmail.append(
      ValidationText({
        text: 'required',
        className: 'text-red-500 text-left ml-3',
        id: 'emptyEmail',
      })
    )
  } else {
    if (emptyEmail) {
      emptyEmail.remove()
    }
  }
  //.................................................................
  if (
    signupEmail.childNodes[0].childNodes[0].value &&
    signupPassword.childNodes[0].childNodes[0].value &&
    reEnterPass.childNodes[0].childNodes[0].value
  ) {
    API.GetData(API.BaseUrl, API.Endpoint).then(response => {
      const sameEmail = response.find(
        item => item.email === signupEmail.childNodes[0].childNodes[0].value
      )

      if (sameEmail) {
        if (sameEmail.email === signupEmail.childNodes[0].childNodes[0].value) {
          e.target.dataset.validation = '0'
          if (emailValid) return
          signupEmail.append(
            ValidationText({
              text: 'There is an existing account with this email address',
              className: 'text-red-500 text-left ml-3',
              id: 'emailValid',
            })
          )
        }
      } else {
        if (emailValid) {
          emailValid.remove()
        }
        if (
          emailPattern.test(signupEmail.childNodes[0].childNodes[0].value) &&
          passwordPattern.test(
            signupPassword.childNodes[0].childNodes[0].value
          ) &&
          reEnterPass.childNodes[0].childNodes[0].value ===
            signupPassword.childNodes[0].childNodes[0].value
        ) {
          API.SetData(API.BaseUrl, API.Endpoint, item).then(response =>
            console.log(response)
          )
          e.target.reset()
        } else {
          return
        }
      }
    })
  }
  // ..............................................................
  if (!signupPassword.childNodes[0].childNodes[0].value) {
    if (emptyPassword) return
    signupPassword.append(
      ValidationText({
        text: 'required',
        className: 'text-red-500 text-left ml-3',
        id: 'emptyPassword',
      })
    )
  } else {
    if (emptyPassword) {
      emptyPassword.remove()
    }
  }
  // ............................................
  if (!reEnterPass.childNodes[0].childNodes[0].value) {
    if (emptyReenterPass) return
    reEnterPass.append(
      ValidationText({
        text: 'required',
        className: 'text-red-500 text-left ml-3',
        id: 'emptyReenterPass',
      })
    )
  } else {
    if (emptyReenterPass) {
      emptyReenterPass.remove()
    }
  }
}
