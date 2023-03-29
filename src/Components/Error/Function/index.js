export const AddError = () => {
  const error = document.getElementById('error')
  error.classList.remove('hidden')
}
export const RemoveError = () => {
  const error = document.getElementById('error')
  error.classList.add('hidden')
}
