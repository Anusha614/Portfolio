import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Route from './Route'
import { Home, Projects, Chronicles } from './Components/Index.jsx'
import Leetcode, {lcInfoLoader} from './Components/Live_Analytics/Leetcode.jsx'
import Github, {GithubInfoLoader} from './Components/Live_Analytics/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Route/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "GitHub",
        element: <Github/>,
        loader: GithubInfoLoader
      },
      {
        path: "Projects",
        element: <Projects/>
      },
      {
        path: "Chronicles",
        element: <Chronicles/>
      },
      {
        path: "LeetCode",
        element: <Leetcode/>,
        loader: lcInfoLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

