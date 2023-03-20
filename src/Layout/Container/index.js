import { Card } from '@/Components/card'
import El from '@/Library'
import { HomePage } from '@/Screens/Home'
import { WetherPage } from '@/Screens/Wether'
import { svg } from '@/Svg'
import { Article } from '../Article'
import { Header } from '../Header'

export const Container = () => {
  return El({
    element: 'main',
    id: 'main',
    className:
      'absolute top-0 left-0 w-full h-full flex items-center justify-center',
    child: [
      HomePage(),
      // WetherPage(),
    ],
  })
}
