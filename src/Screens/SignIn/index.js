import Input from '@/Components/Shared/Input'
import El from '@/Library'
import { handleSignIn } from './Function'

export const SignIn = () => {
  return El({
    element: 'div',
    className: 'w-[80%] mb-4 md:ml-10 sm:ml-6',
    child: [
      El({
        element: 'form',
        id: 'loginForm',
        onsubmit: handleSignIn,
        className: 'flex flex-col gap-8 mt-8',
        child: [
          El({
            element: 'div',
            id: 'signinUserName',
            className: 'flex flex-col gap-2',
            child: [
              Input({
                type: 'text',
                placeholder: 'Email',
                name: 'email',
                eyeClassName: 'hidden',
              }),
            ],
          }),
          El({
            element: 'div',
            id: 'signinPassword',
            className: 'flex flex-col gap-2',
            child: [
              Input({
                type: 'password',
                placeholder: 'Password',
                name: 'password',
              }),
            ],
          }),
          El({
            element: 'input',
            type: 'submit',
            className:
              'bg-[#635985] py-2 rounded-md text-gray-100 font-bold hover:bg-gray-400 hover:text-gray-800 md:w-[20%] cursor-pointer sm:w-[30%]',
            value: 'Login',
          }),
        ],
      }),
    ],
  })
}
