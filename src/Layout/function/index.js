import { Routes } from '@/Routes'

const windowLoad = () => {
  const handleGoShop = () => {
    history.pushState(null, null, '/signin')
    Routes()
  }
  window.addEventListener('load', handleGoShop)
}
export default windowLoad
