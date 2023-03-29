import { Display } from '@/Components/Light&Dark'
import { Article, Header } from '@/Layout'
import El from '@/Library'

export const HomePage = () => {
  return El({
    element: 'div',
    id: 'home',
    className:
      'w-full max-w-[450px] rounded-2xl m-3 relative',
    child: [Header(), Article(),Display()],
  })
}
