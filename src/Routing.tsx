import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Index, {theGenuineArticle} from './Home.tsx'
import Photography from './Photography.tsx'
import Projects, {getProjects} from './Projects.tsx'
import Error from './Error.tsx'
import Layout from './Layout.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
