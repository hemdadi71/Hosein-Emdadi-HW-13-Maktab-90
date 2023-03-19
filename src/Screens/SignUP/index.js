import Input from '@/Components/Shared/Input'
import El from '@/Library'
import { handleSetData } from './Function'

export const SignUP = () => {
  return El({
    element: 'div',
    className: 'w-[80%] mb-4 ml-10',
    child: [
      El({
        element: 'form',
        id: 'signupForm',
        onsubmit: handleSetData,
        className: 'flex flex-col gap-5 mt-8',
        child: [
          El({
            element: 'div',
            id: 'signupEmail',
            className: 'flex flex-col gap-2',
            child: [
              Input({
                type: 'text',
                placeholder: 'Email',
                name: 'email',
              }),
            ],
          }),
          El({
            element: 'div',
            id: 'signupPassword',
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
            element: 'div',
            id: 'reEnterPass',
            className: 'flex flex-col gap-2',
            child: [
              Input({
                type: 'password',
                placeholder: 'Reenter password',
              }),
            ],
          }),
          El({
            element: 'input',
            type: 'submit',
            className:
              'bg-gray-600 py-2 rounded-md text-gray-100 font-bold hover:bg-gray-400 hover:text-gray-800 mt-3 w-[20%] cursor-pointer',
            value: 'Signup',
          }),
        ],
      }),
    ],
  })
}
