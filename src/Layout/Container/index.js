import El from '@/Library'
import { Article } from '../Article'
import { Header } from '../Header'

export const Container = () => {
  return El({
    element: 'main',
    id:'main',
    className: 'absolute top-0 left-0 w-full h-full',
    child: [
      // El({
      //   element: 'div',
      //   className:
      //     'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] bg-gray-50 z-20 opacity-60 rounded-2xl',
      //   child: [Header(), Article()],
      // }),
      // El({
      //   element: 'div',
      //   className:'w-full h-full bg-black opacity-60 absolute z-10'
      // }),
      // El({
      //   element: 'img',
      //   id: 'img',
      //   src: '../../../src/Assets/images/surreal-storm-boat-clouds-thunderstorm-ocean-5k-8k-2560x1080-9018.jpg',
      //   className: 'w-full h-full',
      // }),
    ],
  })
}
