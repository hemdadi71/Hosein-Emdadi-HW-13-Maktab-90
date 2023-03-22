import { displayWeather, getApi } from '@/Screens'

export const handleHideModal = e => {
  const history = document.getElementById('history')
  const searchInput = document.getElementById('searchInput')
  getApi(e.currentTarget.innerText).then(response => {
    displayWeather(response)
    history.classList.add('hidden')
  })
  searchInput.value = e.currentTarget.innerText
}
