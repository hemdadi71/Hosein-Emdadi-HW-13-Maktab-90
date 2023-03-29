import { AddError, RemoveError } from '@/Components/Error/Function'
import { AddLoading, RemoveLoading } from '@/Components/Loading/Function'
import { displayWeather, getApi } from '@/Screens'

export const handleHideModal = e => {
  const history = document.getElementById('history')
  const searchInput = document.getElementById('searchInput')
  AddLoading()
  RemoveError()
  getApi(e.currentTarget.innerText)
    .then(response => {
      displayWeather(response)
      history.classList.add('hidden')
      RemoveLoading()
    })
    .catch(err => {
      RemoveLoading()
      AddError()
    })
  searchInput.value = e.currentTarget.innerText
}
