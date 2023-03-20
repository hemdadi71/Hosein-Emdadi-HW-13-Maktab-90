import El from '@/Library'
import { handleBack, handleSearch } from '@/Screens/Wether/Function'
import { svg } from '@/Svg'
import { debounce } from 'lodash'

export const Card = () => {
  return El({
    element: 'div',
    className:
      'card bg-trBlack text-white p-7 rounded-2xl w-full max-w-[420px] m-2 text-[120%] flex flex-col gap-5',
    child: [
      El({
        element: 'div',
        className: 'search flex items-center justify-center',
        child: [
          El({
            element: 'input',
            onkeyup: debounce(e => handleSearch(e), 1000),
            id: 'searchInput',
            type: 'text',
            className:
              'px-2 py-[.5em] rounded-full border-none pl-5 focus:outline-none focus:border-none bg-[#7c7c7c2b] text-md  w-[calc(100%-50px)]',
            placeholder: 'Search',
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
            child: 'Weather in Denver',
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
            className: 'flex items-cetner gap-5 mt-10',
            child: [
              El({
                element: 'div',
                className: 'cursor-pointer',
                innerHTML: svg.exit,
                onclick: handleBack,
              }),
              El({
                element: 'p',
                className: '',
                child: 'Back to login',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
