import El from '@/Library'
import { svg } from '@/Svg'

export const SuccessBox = text => {
  return El({
    element: 'div',
    id: 'success',
    className: `absolute hidden z-50 top-8 px-7 py-4 bg-[#000000d0] flex items-center justify-center gap-3 rounded-xl`,
    child: [
      El({
        element: 'p',
        className: 'text-xl text-green-500',
        child: `Success ${text}`,
      }),
      El({
        element: 'div',
        innerHTML: svg.success,
      }),
    ],
  })
}
