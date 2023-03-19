import El from '@/Library'
import { Validation } from '../Validation'

const Input = ({ placeholder, className, type, name }) => {
  return El({
    element: 'div',
    className: 'relative',
    child: [
      El({
        element: 'input',
        id: 'floating_filled',
        className:
          'block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
        type: type,
        placeholder: ' ',
        name: name,
      }),
      El({
        element: 'label',
        for: 'floating_filled',
        className:
          'absolute text-md text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 font-bold',
        child: placeholder,
      }),
    ],
  })
}

export default Input
