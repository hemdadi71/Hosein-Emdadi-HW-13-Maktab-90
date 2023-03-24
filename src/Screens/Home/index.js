import { Article, Header } from "@/Layout"
import El from "@/Library"

export const HomePage = () => {
  return El({
    element: 'div',
    id:'home',
    className:
      'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] bg-[#000000d0] rounded-2xl z-10',
    child: [Header(), Article()],
  })
}
