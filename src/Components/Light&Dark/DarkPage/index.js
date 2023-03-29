import ActiveItem from "@/Components/Navbar/Function"

export const DarkPage = () => {
  const home = document.getElementById('home')
  const nav = document.getElementById('nav')
  const indicator = document.getElementById('indicator')
  const line = document.getElementById('line')
  const ul = document.getElementById('ul')
  const HomeInput = document.querySelectorAll('.HomeInput')
  home.classList.remove('bg-[#ccccccd0]')
  home.classList.add('bg-[#000000d0]')
  nav.classList.add('text-gray-100')
  nav.classList.remove('text-gray-800')
  indicator.classList.add('indicator-Dark')
  indicator.classList.remove('indicator-Light')
  line.classList.add('line-dark')
  line.classList.remove('line-light')
  ul.classList.remove('text-gray-700')
  ul.classList.add('text-gray-300')
  HomeInput.forEach(item=> item.classList.remove('lightInput'))
  HomeInput.forEach(item=> item.classList.add('text-white'))
  ActiveItem()
}
