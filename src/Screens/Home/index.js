import { Article, Header } from "@/Layout"
import El from "@/Library"

export const HomePage = () => {
  return El({
    element: 'div',
    className:
      'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] bg-gray-50 z-20 opacity-60 rounded-2xl',
    child: [Header(), Article()],
  })
}
