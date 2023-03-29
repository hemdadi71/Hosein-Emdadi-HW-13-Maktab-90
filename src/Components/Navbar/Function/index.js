import El from '@/Library'
import { Routes } from '@/Routes'

const ActiveItem = () => {
  const ul = document.getElementById('ul')
  const li = ul.querySelectorAll('li')
  const dark = localStorage.getItem('dark')
  const light = localStorage.getItem('light')
  if (dark) {
    const handleActiveItem = e => {
      li.forEach(item => item.classList.remove('active'))
      li.forEach(item => item.classList.remove('lightActive'))
      e.currentTarget.classList.add('active')
    }
    li.forEach(item => item.addEventListener('click', handleActiveItem))
  } else if (light) {
    const handleActiveItem = e => {
      li.forEach(item => item.classList.remove('lightActive'))
      li.forEach(item => item.classList.remove('active'))
      e.currentTarget.classList.add('lightActive')
    }
    li.forEach(item => item.addEventListener('click', handleActiveItem))
  }
}
export default ActiveItem


export const SignInPage = () => {
  history.pushState(null, null, '/signin')
  Routes()
}
export const SignUpPage = () => {
  history.pushState(null, null, '/signup')
  Routes()
}
