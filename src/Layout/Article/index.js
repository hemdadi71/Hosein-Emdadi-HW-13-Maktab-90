import El from '@/Library'
import { Routes } from '@/Routes'



export const Article = () => {
  return El({
    element: 'article',
    id: 'article',
    className: 'mt-4 text-center bg-gray-50 h-[300px] rounded-b-2xl',
    child: [Routes()],
  })
}
