import El from '@/Library'
import { svg } from '@/Svg'

export const LoadingBox = () => {
  return El({
    element: 'div',
    id: 'loading',
    className: `absolute hidden z-50 top-2 px-7 py-4 bg-[#000000d0] flex items-center justify-center gap-3 rounded-xl`,
    child: [
      El({
        element: 'p',
        className: 'text-white text-2xl',
        child: 'Loading...',
      }),
      El({
        element: 'div',
        className: '',
        role: 'status',
        innerHTML: svg.spinner,
      }),
    ],
  })
}
