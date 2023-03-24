import El from '@/Library'
import { Routes } from '@/Routes'



export const Article = () => {
  return El({
    element: 'article',
    id: 'article',
    className: 'text-center rounded-b-2xl',
    child: [Routes()],
  })
}
