import Home from '@/pages/home/index'
import About from '@/pages/about/index'
import { useRoutes } from 'react-router-dom'
const router = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
]

export default function Router() {
  return useRoutes(router)
}
