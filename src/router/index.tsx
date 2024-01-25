import Home from '@/pages/home/index'
import About from '@/pages/about/index'
import Layout from '@/pages/layout/index'
import NotFound from '@/pages/404/index'
import { Navigate, useRoutes } from 'react-router-dom'
const router = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    id: 'layout',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
  {
    path: '/404',
    element: <NotFound />
  }
]

export default function Router() {
  return useRoutes(router)
}
