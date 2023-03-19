import { API } from '@/API/Function'

export const handleSignIn = e => {
  e.preventDefault()
  console.log(e.target.email.value)
  API.GetData(API.BaseUrl, API.Endpoint).then(response => {
    console.log(response)
    const result = response.find(
      item =>
        item.email === e.target.email.value &&
        item.password === e.target.password.value
    )
    console.log(result)
    if (result) {
      alert('access')
    } else {
      alert('Please Create account')
    }
  })
}
