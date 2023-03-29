import El from '@/Library'
import { handleBack, handleSearch } from '@/Screens/Wether/Function'
import { svg } from '@/Svg'
import { debounce } from 'lodash'
import { Display } from '../Light&Dark'
import { WeahterDisplay } from './Function'

export const Card = () => {
  return El({
    element: 'div',
    id: 'card',
    className:
      'card bg-trBlack text-white p-7 rounded-2xl w-full max-w-[420px] m-3 text-[120%] flex flex-col gap-5',
    child: [
      El({
        element: 'div',
        className: 'search flex items-center justify-center',
        child: [
          El({
            element: 'div',
            className: 'w-[calc(100%-50px)] relative',
            child: [
              El({
                element: 'input',
                onkeyup: debounce(e => handleSearch(e), 1000),
                id: 'searchInput',
                type: 'text',
                className:
                  'px-2 py-[.5em] rounded-full border-none pl-5 focus:outline-none focus:border-none bg-[#7c7c7c2b] text-md  w-full',
                placeholder: 'Search',
              }),
              El({
                element: 'div',
                className: 'hidden mt-1 absolute w-full overflow-auto text-sm',
                id: 'history',
                child: [
                  El({
                    element: 'ul',
                    id: 'inputUL',
                    className: 'w-full overflow-auto text-sm',
                    child: [],
                  }),
                  El({
                    element: 'div',
                    id: 'removeHistory',
                    className:
                      'w-full bg-[#15141C] bg-opacity-100 p-1 pl-6 hover:bg-gray-800 cursor-pointer text-red-500 font-bold',
                    child: 'Remove all',
                  }),
                ],
              }),
            ],
          }),

          El({
            element: 'button',
            id: 'search',
            innerHTML: svg.search,
            className:
              'm-1 rounded-full hover:bg-[#7c7c7c6b] h-[46px] w-[46px] bg-[#7c7c7c2b] flex items-center justify-center',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'weather flex flex-col gap-1',
        child: [
          El({
            element: 'h2',
            id: 'city',
            className: 'text-3xl font-bold mb-5',
            child: 'Weather in Tehran',
          }),
          El({
            element: 'h1',
            id: 'temp',
            className: ' text-4xl font-bold mb-5',
            child: '51°C',
          }),
          El({
            element: 'div',
            className: 'flex items-center gap-3',
            child: [
              El({
                element: 'img',
                id: 'icon',
                src: 'https://openweathermap.org/img/wn/04d.png',
                className: 'w-[70px] h-[70px]',
              }),
              El({
                element: 'div',
                id: 'description',
                className: 'mt-1',
                child: 'Cloudy',
              }),
            ],
          }),
          El({
            element: 'div',
            id: 'humidity',
            child: 'Humidity: 60%',
          }),
          El({
            element: 'div',
            id: 'wind',
            child: 'Wind speed: 6.2 km/h',
          }),
          El({
            element: 'div',
            className: 'flex items-cetner gap-5 mt-10 relative',
            child: [
              El({
                element: 'div',
                id: 'exit',
                className: 'cursor-pointer',
                innerHTML: svg.exit,
                onclick: handleBack,
              }),
              El({
                element: 'p',
                className: '',
                child: 'Sign out',
              }),
              El({
                element: 'div',
                id:'displayIcon',
                onclick: WeahterDisplay,
                className: 'absolute right-0 bottom-0 bg-white rounded-full p-1 cursor-pointer',
              }),
            ],
          })
        ],
      }),
    ],
  })
}
