import El from '@/Library'
export const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$/
export const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
export const ValidationText = ({ text, className, id }) => {
  return El({
    element: 'p',
    className: `${className}`,
    child: text,
    id,
  })
}
export const handleValidationEmail = e => {
  const emailValidation = document.getElementById('emailValidation')
  const emptyEmail = document.getElementById('emptyEmail')
  if (e.target.value) {
    if (!emailPattern.test(e.target.value)) {
      if (emailValidation) return null
      e.target.parentElement.append(
        ValidationText({
          text: 'please enter a valid email',
          className: 'text-red-500 text-left pl-2 mt-1',
          id: 'emailValidation',
        })
      )
      emptyEmail.remove()
    } else {
      emailValidation.remove()
    }
  } else {
    emailValidation.remove()
  }
}

export const handleValidationPassword = e => {
  const passwordValidation = document.getElementById('passwordValidation')
  const emptyPassword = document.getElementById('emptyPassword')
  if (e.target.value) {
    if (!passwordPattern.test(e.target.value)) {
      if (passwordValidation) return null
      e.target.parentElement.append(
        ValidationText({
          text: 'please enter a valid password',
          className: 'text-red-500 text-left pl-2 mt-1',
          id: 'passwordValidation',
        })
      )
      emptyPassword.remove()
    } else {
      passwordValidation.remove()
    }
  } else {
    passwordValidation.remove()
  }
}
export const handleValidationRepassword = e => {
  const signupForm = document.getElementById('signupForm')
  const emptyReenterPass = document.getElementById('emptyReenterPass')
  const passwordReenterValidation = document.getElementById(
    'passwordReenterValidation'
  )
  if (e.target.value) {
    if (e.target.value !== signupForm.password.value) {
      if (passwordReenterValidation) return null
      e.target.parentElement.append(
        ValidationText({
          text: 'password not match',
          className: 'text-red-500 text-left pl-2 mt-1',
          id: 'passwordReenterValidation',
        })
      )
      emptyReenterPass.remove()
    } else {
      passwordReenterValidation.remove()
    }
  } else {
    passwordReenterValidation.remove()
  }
}
