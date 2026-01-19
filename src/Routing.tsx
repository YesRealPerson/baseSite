import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Loading from "./Loading.tsx"
import Index, {theGenuineArticle} from './Home.tsx'
import Photography from './Photography.tsx'
import Projects, {getProjects} from './Projects.tsx'
import Blog from './Blog.tsx'
import Error from './Error.tsx'
import Layout from './Layout.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader: theGenuineArticle
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: getProjects
      },
      {
        path: "/pictures",
        element: <Photography />,
      },
      {
        path: "/blog",
        element: <Blog />,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <main className='m-5 mt-20'>
    </main>
  </StrictMode>,
)
