import El from '@/Library'
import { svg } from '@/Svg'
import { handleShowPassword } from './Function'

const Input = ({ placeholder, eyeClassName, type, name, onkeyup }) => {
  return El({
    element: 'div',
    className: 'relative',
    child: [
      El({
        element: 'input',
        id: 'floating_filled',
        className:
          'rounded-full px-2 pl-5 py-[.5rem] bg-[#7c7c7c2b] w-full border-none outline-none text-white text-md',
        type: type,
        placeholder: placeholder,
        name: name,
        onkeyup,
      }),
      El({
        element: 'div',
        id: 'svg',
        className: `${eyeClassName} absolute right-3 top-[.65rem]`,
        innerHTML: svg.hidden,
        onclick: handleShowPassword,
      }),
    ],
  })
}

export default Input
