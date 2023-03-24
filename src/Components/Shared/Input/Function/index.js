import { svg } from '@/Svg'

export const handleShowPassword = e => {
  const paswordInput = e.target.closest('#svg').previousElementSibling
  const icon = document.getElementById('svg')
  if (paswordInput.type === 'password') {
    paswordInput.type = 'text'
    icon.innerHTML = ''

    paswordInput.nextElementSibling.innerHTML = svg.show
  } else {
    paswordInput.type = 'password'
    paswordInput.nextElementSibling.innerHTML = svg.hidden
  }
}
