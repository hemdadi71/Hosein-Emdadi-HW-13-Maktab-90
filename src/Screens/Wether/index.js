import { Card } from '@/Components/card'
import El from '@/Library'

export const WetherPage = () => {
  return El({
    element: 'div',
    id: 'wehter-page',
    className: 'w-full flex items-center justify-center',
    child: [Card()],
  })
}
// weather.getApi('Denver').then(respons => console.log(respons))
