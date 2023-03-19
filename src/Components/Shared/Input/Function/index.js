export const handleShowPassword = e => {
  const paswordInput = e.target.closest('#svg').previousElementSibling
  if (paswordInput.type === 'password') {
    e.currentTarget.childNodes[0].setAttribute('fill', 'black')
    paswordInput.type = 'text'
  } else {
    e.currentTarget.childNodes[0].setAttribute('fill', '#858585')
    paswordInput.type = 'password'
  }
}
