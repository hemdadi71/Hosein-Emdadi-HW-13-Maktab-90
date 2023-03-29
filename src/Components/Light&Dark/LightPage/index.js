import ActiveItem from '@/Components/Navbar/Function'
import { svg } from '@/Svg'

export const LightPage = () => {
  ActiveItem()
  const home = document.getElementById('home')
  const nav = document.getElementById('nav')
  const indicator = document.getElementById('indicator')
  const line = document.getElementById('line')
  const ul = document.getElementById('ul')
  const HomeInput = document.querySelectorAll('.HomeInput')
  home.classList.remove('bg-[#000000d0]')
  home.classList.add('bg-[#ccccccd0]')
  nav.classList.remove('text-gray-100')
  nav.classList.add('text-gray-800')
  indicator.classList.remove('indicator-Dark')
  indicator.classList.add('indicator-Light')
  line.classList.remove('line-dark')
  line.classList.add('line-light')
  ul.classList.remove('text-gray-300')
  ul.classList.add('text-gray-600')
  HomeInput.forEach(item => item.classList.remove('text-white'))
  HomeInput.forEach(item => item.classList.add('lightInput', 'text-dark'))
}
