export const AddLoading = () => {
  const loading = document.getElementById('loading')
  loading.classList.remove('hidden')
}
export const RemoveLoading = () => {
  const loading = document.getElementById('loading')
  loading.classList.add('hidden')
}
