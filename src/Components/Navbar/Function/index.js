import El from "@/Library"
import { Routes } from "@/Routes"


const ActiveItem = () => {
  const ul = document.getElementById('ul')
  const li = ul.querySelectorAll('li')
  const handleActiveItem = e => {
    li.forEach(item => item.classList.remove('active'))
    e.currentTarget.classList.add('active')
  }
  li.forEach(item => item.addEventListener('click', handleActiveItem))
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

