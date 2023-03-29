import El from '@/Library'
import { handleHideModal } from './function'

export const Li = ({ child}) => {
  return El({
    element: 'li',
    className: 'w-full bg-[#15141C] bg-opacity-100 p-1 pl-6 hover:bg-gray-800 cursor-pointer inputLi',
    child: child,
    onclick: handleHideModal,
  })
}
