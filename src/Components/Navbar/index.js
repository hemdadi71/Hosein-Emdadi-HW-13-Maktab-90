import El from '@/Library'
import { SignInPage, SignUpPage } from './Function'

export const Navbar = () => {
  return El({
    element: 'nav',
    id: 'nav',
    className:
      'pt-5 rounded-t-2xl text-gray-100 relative',
    child: [
      El({
        element: 'div',
        className:
          'flex flex-row-reverse w-fit ml-9 gap-3 items-center justify-center sm:relative sm:transform -translate-x-1/2 sm:left-1/2 md:translate-x-0 md:absolute md:right-0 md:top-3 pb-3',
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
        className:
          'flex ml-10 relative text-gray-300 h-[50px] items-center font-bold',
        child: [
          El({
            element: 'li',
            id:'firstLi',
            className:
              'w-[100px] text-center z-20 cursor-pointer active',
            child: 'SignIn',
            onclick: SignInPage,
          }),
          El({
            element: 'li',
            className:
              'w-[100px]  text-center z-20 cursor-pointer',
            child: 'SignUp',
            onclick: SignUpPage,
          }),
          El({
            element: 'div',
            id:'indicator',
            className:
              'absolute z-10 w-[100px] h-[50px] rounded-t-xl left-0 indicator indicator-Dark',
          }),
        ],
      }),
      El({
        element: 'div',
        id:'line',
        className: 'md:absolute w-full h-[1rem] line-dark',
      }),
    ],
  })
}
