import El from '@/Library'
import { changeDisplay } from './Function'

export const Display = () => {
  return El({
    element: 'div',
    id: 'display',
    onclick: changeDisplay,
    onmouseenter: e => {
      const light = localStorage.getItem('light')
      const dark = localStorage.getItem('dark')
      if (dark) {
        e.target.childNodes[0].setAttribute('fill', 'dark')
        e.target.classList.remove('bg-trBlack')
        e.target.classList.add('bg-[#ccc]')
      }else if(light){
        e.target.childNodes[0].setAttribute('fill', 'white')
        e.target.classList.add('bg-[000]')
        e.target.classList.remove('bg-trBlack')
      }
    },
    onmouseleave: e => {
      const light = localStorage.getItem('light')
      const dark = localStorage.getItem('dark')
      if (dark) {
        e.target.childNodes[0].setAttribute('fill', 'white')
        e.target.classList.add('bg-trBlack')
        e.target.classList.remove('bg-[#ccc]')
      }else if(light){
        e.target.childNodes[0].setAttribute('fill', 'dark')
        e.target.classList.remove('bg-trBlack')
        e.target.classList.add('bg-[#ccc]')
      }
    },
    className:
      'bg-trBlack absolute bottom-3 right-14 cursor-pointer rounded-full p-2 hover:bg-[#ccc]',
  })
}
