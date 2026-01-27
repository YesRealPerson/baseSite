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
import 'katex/dist/katex.min.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout style={0}/>,
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
  },
  {
    path: "/modern",
    element: <Layout style={1}/>,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/modern",
        element: <Index />,
        loader: theGenuineArticle
      },
      {
        path: "/modern/projects",
        element: <Projects />,
        loader: getProjects
      },
      {
        path: "/modern/pictures",
        element: <Photography />,
      },
      {
        path: "/modern/blog",
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
