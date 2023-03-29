import El from '@/Library'


export const Container = () => {
  return El({
    element: 'main',
    id: 'main',
    className:
      'absolute top-0 left-0 w-full h-full flex items-center justify-center',
  })
}
