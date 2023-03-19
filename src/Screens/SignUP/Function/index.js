import { API } from '@/API/Function'

export const handleSetData = e => {
  e.preventDefault()
  const email = e.target.email
  const password = e.target.password
  const item = {
    id: Date.now(),
    email: email.value,
    password: password.value,
  }
  API.SetData(API.BaseUrl, API.Endpoint, item).then(response =>
    console.log(response)
  )
  e.currentTarget.reset()
}
