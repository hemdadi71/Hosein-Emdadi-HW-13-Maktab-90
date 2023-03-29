import ActiveItem from '@/Components/Navbar/Function'
import { svg } from '@/Svg'
import { DarkPage } from '../DarkPage'
import { LightPage } from '../LightPage'

export const changeDisplay = e => {
  const ul = document.getElementById('ul')
  const li = ul.querySelectorAll('li')
  const display = document.getElementById('display')
  const firstLi = document.getElementById('firstLi')
  const light = e.currentTarget.childNodes[0].classList.contains(
    'bi-brightness-high-fill'
  )
  const dark = e.currentTarget.childNodes[0].classList.contains('bi-moon-fill')
  if (light) {
    e.currentTarget.innerHTML = svg.dark
    localStorage.removeItem('dark', JSON.stringify('dark'))
    localStorage.setItem('light', JSON.stringify('light'))
    li.forEach(item => item.classList.remove('active'))
    firstLi.classList.add('lightActive')
    display.classList.remove('bg-trBlack')
    display.classList.add('bg-[#ffffffd0]', 'hover:bg-trBlack')
    display.childNodes[0].setAttribute('fill', 'dark')
    LightPage()
  } else if (dark) {
    e.currentTarget.innerHTML = svg.light
    localStorage.removeItem('light', JSON.stringify('light'))
    localStorage.setItem('dark', JSON.stringify('dark'))
    li.forEach(item => item.classList.remove('lightActive'))
    firstLi.classList.add('active')
    display.classList.add('bg-trBlack')
    display.classList.remove('bg-[#ffffffd0]', 'hover:bg-trBlack')
    display.childNodes[0].setAttribute('fill', 'white')
    DarkPage()
  }
}

export const AddLight_Dark = () => {
  const light = localStorage.getItem('light')
  const dark = localStorage.getItem('dark')
  const display = document.getElementById('display')
  const firstLi = document.getElementById('firstLi')
  if (light) {
    LightPage()
    ActiveItem()
    firstLi.classList.remove('active')
    firstLi.classList.add('lightActive')
    display.innerHTML = svg.dark
    display.classList.remove('bg-trBlack')
    display.classList.add('bg-[#ffffffd0]', 'hover:bg-trBlack')
    display.childNodes[0].setAttribute('fill', 'dark')
  } else if (dark) {
    DarkPage()
    ActiveItem()
    display.innerHTML = svg.light
    display.classList.add('bg-trBlack')
    display.classList.remove('bg-[#ffffffd0]', 'hover:bg-trBlack')
    display.childNodes[0].setAttribute('fill', 'white')
  }
}
