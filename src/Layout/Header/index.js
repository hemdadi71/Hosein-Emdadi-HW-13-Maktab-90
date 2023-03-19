import { Navbar } from '@/Components'
import El from '@/Library'

export const Header = () => {
  return El({
    element: 'header',
    className: 'rounded-t-2xl',
    child: [Navbar()],
  })
}
