import El from '@/Library'
import { SignInPage, SignUpPage } from './Function'

export const Navbar = () => {
  return El({
    element: 'nav',
    id: 'nav',
    className: 'pt-5 rounded-t-2xl text-gray-100 relative',
    child: [
      El({
        element: 'div',
        className: 'flex flex-row-reverse mx-6 gap-3 items-center absolute right-0 top-3 pb-3',
        child: [
          El({
            element: 'img',
            className: 'w-12',
            src: '../../../src/Assets/images/59-595968_windy-app.png',
          }),
          El({
            element: 'h1',
            className: 'text-center text-4xl',
            child: 'Windy',
          }),
        ],
      }),
      El({
        element: 'ul',
        id: 'ul',
        className: 'flex ml-10 relative h-[50px] items-center font-bold',
        child: [
          El({
            element: 'li',
            className: 'w-[100px] text-gray-400 text-center z-20 cursor-pointer active',
            child: 'SignIn',
            onclick: SignInPage,
          }),
          El({
            element: 'li',
            className: 'w-[100px] text-gray-400 text-center z-20 cursor-pointer',
            child: 'SignUp',
            onclick: SignUpPage,
          }),
          El({
            element: 'div',
            className:
              'absolute z-10 w-[100px] h-[50px] rounded-t-xl left-0 indicator',
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'absolute w-full h-[1rem] line',
      }),
    ],
  })
}
