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
    hydrateFallbackElement: <Loading style={0}/>,
    children: [
      {
        path: "/",
        element: <Index style={0}/>,
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
    hydrateFallbackElement: <Loading style={1}/>,
    children: [
      {
        path: "/modern",
        element: <Index style={1}/>,
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
    <main>
    </main>
  </StrictMode>,
)
