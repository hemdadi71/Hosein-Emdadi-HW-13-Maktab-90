import { svg } from '@/Svg'

export const CardDisplay = () => {
  const card = document.getElementById('card')
  const searchInput = document.getElementById('searchInput')
  const inputUL = document.getElementById('inputUL')
  const exit = document.getElementById('exit')
  const displayIcon = document.getElementById('displayIcon')
  const light = localStorage.getItem('light')
  const dark = localStorage.getItem('dark')
  if (light) {
    card.classList.remove('bg-trBlack', 'text-white')
    card.classList.add('bg-[#ccccccd0]', 'text-dark')
    searchInput.classList.add('bg-[#ccccccd0]', 'placeholder-black')
    searchInput.classList.remove('bg-[#ccccccd0]')
    inputUL.classList.add('text-white')
    exit.childNodes[0].setAttribute('fill', 'dark')
    displayIcon.innerHTML = svg.dark
  } else if (dark) {
    card.classList.add('bg-trBlack', 'text-white')
    card.classList.remove('bg-[#ccccccd0]')
    searchInput.classList.remove('bg-[#ccccccd0]', 'placeholder-black')
    searchInput.classList.add('bg-[#7c7c7c2b]')
    inputUL.classList.remove('text-white')
    exit.childNodes[0].setAttribute('fill', 'white')
    displayIcon.innerHTML = svg.light
    displayIcon.childNodes[0].setAttribute('fill', 'dark')
  }
}
export const WeahterDisplay = e => {
  console.log(e.currentTarget)
  const light = localStorage.getItem('light')
  const dark = localStorage.getItem('dark')
  if (light) {
    localStorage.removeItem('light')
    localStorage.setItem('dark', 'dark')
    CardDisplay()
  } else if (dark) {
    localStorage.removeItem('dark')
    localStorage.setItem('light', 'light')
    CardDisplay()
  }
}
