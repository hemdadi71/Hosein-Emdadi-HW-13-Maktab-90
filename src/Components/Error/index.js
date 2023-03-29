import El from '@/Library'

export const ErrorBox = () => {
  return El({
    element: 'div',
    id: 'error',
    className: `absolute hidden z-50 top-2 px-7 py-4 bg-[#000000d0] flex items-center justify-center gap-3 rounded-xl`,
    child: [
      El({
        element: 'p',
        className: 'text-xl text-red-500',
        child: 'Location Not Found !!!',
      }),
    ],
  })
}
