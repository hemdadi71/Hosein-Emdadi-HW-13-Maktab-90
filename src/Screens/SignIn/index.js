import { Validation } from '@/Components'
import Input from '@/Components/Shared/Input'
import El from '@/Library'

export const SignIn = () => {
  return El({
    element: 'div',
    className: 'w-[80%] mb-4 ml-10',
    child: [
      El({
        element: 'form',
        id: 'loginForm',
        className: 'flex flex-col gap-10 mt-8',
        child: [
          El({
            element: 'div',
            id: 'signinUserName',
            className: 'flex flex-col gap-2',
            child: [
              Input({
                type: 'text',
                placeholder: 'Email',
              }),
              // Validation({
              //   text: 'Invalid',
              //   className:'text-green-500 font-bold text-left pl-2'
              // }),
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
              }),
            ],
          }),
          El({
            element: 'input',
            type: 'submit',
            className:
              'bg-gray-600 py-2 rounded-md text-gray-100 font-bold hover:bg-gray-400 hover:text-gray-800 mt-5 w-[20%] cursor-pointer',
            value: 'LogIn',
          }),
        ],
      }),
    ],
  })
}
