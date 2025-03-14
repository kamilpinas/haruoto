import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { HoursLocation } from "./pages/HoursLocation"
import { Reservations } from "./pages/Reservations"
import { Events } from "./pages/Events"
import { Vouchers } from "./pages/Vouchers"
import { Newsletter } from "./pages/Newsletter"
import { Team } from "./pages/Team"
import { About } from "./pages/About"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App component now acts as the layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/hours-location",
        element: <HoursLocation />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/vouchers",
        element: <Vouchers />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
