// import El from '@/Library'

import El from '@/Library'
import { SignIn, SignUP } from '@/Screens'
import { WetherPage } from '@/Screens/Wether'

export const Routes = () => {
  const article =
    document.getElementById('article') ||
    El({
      element: 'div',
    })
  article.innerHTML = ''
  switch (location.pathname) {
    case '/signin':
      return article.appendChild(SignIn())
    case '/signup':
      return article.appendChild(SignUP())
    default:
      return article.appendChild(SignIn())
  }
}
