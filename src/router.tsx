import { createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import Root from "./pages/Root"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
